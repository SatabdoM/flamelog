'use server';

import { cookies } from 'next/headers';

import { User } from '@/types/user';

export const auth = async () => {
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
