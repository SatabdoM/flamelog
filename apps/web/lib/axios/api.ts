import { baseApi } from './base-api';
import { useAuthStore } from '@/stores/auth-store';

export const api = baseApi;

api.interceptors.request.use((config) => {
  // You can modify request config here if needed
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If error is 401 and we haven't already retried
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

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

    return Promise.reject(error);
  }
);

export default api;
