import { baseApi } from '@/lib/axios';
import { User } from '@/types/user';

export const authActions = {
  login: async (credentials: { email: string; password: string }) => {
    const response = await baseApi.post<{ user: User }>('/auth/login', credentials);
    return response.data;
  },
  logout: async () => {
    await baseApi.post('/auth/logout');
  },
  refreshAccessToken: async () => {
    await baseApi.post('/auth/refresh');
  },
};
