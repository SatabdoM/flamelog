import { api } from '@/lib/axios';
import { useAuthStore } from '@/stores/auth.store';
import { User } from '@/types/user';

export const signup = async (data: { name: string; email: string; password: string }) => {
  const authStore = useAuthStore.getState();

  authStore.setLoading(true);
  authStore.setError(null);

  try {
    const res = await api.post<{ user: User }>('/auth/signup', data);
    const { user } = res.data;

    authStore.setUser(user);
    return { user };
  } catch (error: any) {
    authStore.setError(error.response?.data?.message || 'Signup failed');
    throw error;
  } finally {
    authStore.setLoading(false);
  }
};

export const login = async (credentials: { email: string; password: string }) => {
  const authStore = useAuthStore.getState();

  authStore.setLoading(true);
  authStore.setError(null);

  try {
    const res = await api.post<{ user: User }>('/auth/login', credentials);
    const { user } = res.data;

    authStore.setUser(user);
    return { user };
  } catch (error: any) {
    authStore.setError(error.response?.data?.message || 'Login failed');
    throw error;
  } finally {
    authStore.setLoading(false);
  }
};

export const logout = async () => {
  const authStore = useAuthStore.getState();

  authStore.setLoading(true);
  authStore.setError(null);

  try {
    await api.post('/auth/logout');
  } catch (error: any) {
    console.log('Some error happened with the logout api', error);

    // No need to throw any error in case of logout
  } finally {
    authStore.setUser(null);
    authStore.setLoading(false);
  }
};

export const refreshAccessToken = async () => {
  const authStore = useAuthStore.getState();

  authStore.setLoading(true);
  authStore.setError(null);

  try {
    await api.post('/auth/refresh');
  } catch (error: any) {
    console.log('Some error happened with the refresh api', error);
    await logout();

    throw error;
  } finally {
    authStore.setLoading(false);
  }
};

export const getMe = async () => {
  try {
    const res = await api.get<{ user: User }>('/auth/me');
    return res.data;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Unable to fetch user data');
  }
};
