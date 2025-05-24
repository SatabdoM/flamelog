import axios from 'axios';
import { useAuthStore } from '@/stores/auth-store';

const isServer = () => typeof window === 'undefined';
const apiDomainUri = process.env.NEXT_PUBLIC_API_URL || 'http:localhost:5001';

export const api = axios.create({
  baseURL: `${apiDomainUri}/api`,
  withCredentials: true,
});

api.interceptors.request.use(async (config) => {
  let token: string | undefined;

  if (isServer()) {
    // Server-side: use next/headers cookies
    const { cookies } = await import('next/headers');
    const cookieStore = await cookies();
    token = cookieStore.get('accessToken')?.value;
  } else {
    // Client-side: use document.cookie
    token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('accessToken='))
      ?.split('=')[1];
  }

  if (token) {
    config.headers.setAuthorization(`Bearer ${token}`);
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If error is 401 and we haven't already retried
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (isServer()) {
        // Server-side: use next/headers cookies
        const { cookies } = await import('next/headers');
        const cookieStore = await cookies();

        try {
          const allCookies = cookieStore.getAll();
          const cookieHeader = allCookies.map((c) => `${c.name}=${c.value}`).join('; ');

          // Attempt to refresh token
          const refreshResponse = await axios.post(
            `${apiDomainUri}/api/auth/refresh`,
            {},
            {
              headers: { Cookie: cookieHeader },
              withCredentials: true,
            }
          );

          // Extract new access token from Set-Cookie
          const newAccessToken = refreshResponse.headers['set-cookie']
            ?.find((c) => c.startsWith('accessToken='))
            ?.split(';')[0]
            ?.split('=')[1];

          if (!newAccessToken) {
            throw new Error('No new access token received');
          }

          // Update the cookie store with the new token
          cookieStore.set('accessToken', newAccessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 15 * 60, // 15 minutes
            sameSite: 'lax',
            path: '/',
          });

          // Update the original request with new token
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

          // Retry the original request
          return api(originalRequest);
        } catch (refreshError) {
          // Clear the access token cookie if refresh failed
          cookieStore?.delete('accessToken');
          return Promise.reject(refreshError);
        }
      } else {
        try {
          await useAuthStore.getState().refreshAccessToken();
          // Retry the original request with new token
          return api(originalRequest);
        } catch (refreshError) {
          // Refresh token failed - log user out
          await useAuthStore.getState().logout();
          return Promise.reject(refreshError);
        }
      }
    }

    return Promise.reject(error);
  }
);

export default api;
