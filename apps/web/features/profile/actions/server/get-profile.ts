'use server';

import { api } from '@/lib/axios';

export const getProfile = async (username: string) => {
  try {
    // const res = await api.get(`/profile/${username}`);
    // return res.data;

    const mockUsers = ['akash', 'jane_doe', 'john', 'hello'];
    return mockUsers.includes(username) ? { username } : null;
  } catch (error) {
    console.error('GET_PROFILE_ERROR', error);
    return null;
  }
};
