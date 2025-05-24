import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

import { User } from '@/types/user';

export const getAuthServerSide = async () => {
  try {
    const cookieStore = await cookies();
    const cookieString = cookieStore
      .getAll()
      .map((c) => `${c.name}=${c.value}`)
      .join('; ');

    const accessToken = cookieStore.get('accessToken')?.value;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001'}/api/auth/me`,
      {
        headers: {
          Cookie: cookieString,
          Authorization: `Bearer ${accessToken}`,
        },
        credentials: 'include',
      }
    );

    const { user } = (await response.json()) as { user: User };

    return { user };
  } catch (error) {
    return { user: null };
  }
};

export async function verifyAuth(request: NextRequest) {
  const cookies = request.cookies.getAll();
  const cookieHeader = cookies.map((c) => `${c.name}=${c.value}`).join('; ');
  const accessToken = request.cookies.get('accessToken')?.value;

  // First, try to fetch user with current accessToken
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`, {
      headers: {
        Cookie: cookieHeader,
        Authorization: `Bearer ${accessToken}`,
      },
      credentials: 'include',
    });

    if (response.ok) {
      const user: User = await response.json();
      return { user, newAccessToken: null }; // No refresh needed
    }
    throw new Error('Unauthorized');
  } catch (error) {
    // console.log('User verification failed, attempting token refresh...');
  }

  // If initial /auth/me fails, try refreshing the token
  try {
    const refreshResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/refresh`, {
      method: 'POST',
      headers: { Cookie: cookieHeader },
      credentials: 'include',
    });

    if (!refreshResponse.ok) throw new Error('Refresh failed');

    // Extract the new accessToken from Set-Cookie
    const newAccessToken = refreshResponse.headers
      .get('Set-Cookie')
      ?.match(/accessToken=([^;]+)/)?.[1];
    if (!newAccessToken) throw new Error('No new access token');

    // Retry /auth/me with the new token
    const retryResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`, {
      headers: {
        Cookie: cookieHeader,
        Authorization: `Bearer ${newAccessToken}`,
      },
      credentials: 'include',
    });

    if (!retryResponse.ok) throw new Error('Retry failed');

    const user: User = await retryResponse.json();
    return { user, newAccessToken }; // Return the new token to set in the browser
  } catch (error) {
    return { user: null, newAccessToken: null };
  }
}
