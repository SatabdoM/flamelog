import { api } from '@/lib/axios';
import { User } from '@/types/user';

export const authActions = {
  signup: async (data: { name: string; email: string; password: string }) => {
    const response = await api.post<{ user: User }>('/auth/signup', data);
    return response.data;
  },
  login: async (credentials: { email: string; password: string }) => {
    const response = await api.post<{ user: User }>('/auth/login', credentials);
    return response.data;
  },
  logout: async () => {
    await api.post('/auth/logout');
  },
  refreshAccessToken: async () => {
    await api.post('/auth/refresh');
  },
  getMe: async () => {
    const response = await api.get<{ user: User | undefined }>('/auth/me');
    return response.data;
  },
};
