import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { User } from '@/types/user';
import { authActions } from '@/lib/actions/auth.actions';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  signup: (data: { name: string; email: string; password: string }) => Promise<void>;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  refreshAccessToken: () => Promise<void>;
  hydrateAuth: (user: any) => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        isAuthenticated: false,
        loading: false,
        error: null,
        signup: async (data) => {
          set({ loading: true, error: null });
          try {
            const { user } = await authActions.signup(data);
            set({ user, isAuthenticated: true, loading: false });
          } catch (error: any) {
            set({ error: error.response?.data?.message || 'Signup failed', loading: false });
            throw error;
          }
        },
        login: async (credentials) => {
          set({ loading: true, error: null });
          try {
            const data = await authActions.login(credentials);
            set({ user: data.user, isAuthenticated: true, loading: false });
          } catch (error: any) {
            set({ error: error.response?.data?.message || 'Login failed', loading: false });
            throw error;
          }
        },
        logout: async () => {
          set({ loading: true });
          try {
            await authActions.logout();
          } catch (error) {
            console.error('Logout API error:', error);
          } finally {
            set({ user: null, isAuthenticated: false, loading: false });
          }
        },
        refreshAccessToken: async () => {
          try {
            await authActions.refreshAccessToken();
          } catch (error) {
            useAuthStore.getState().logout();
            throw error;
          }
        },
        hydrateAuth: (user: User | null) => {
          set({ user, isAuthenticated: !!user });
        },
      }),
      {
        name: 'auth-storage',
        partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated }),
      }
    )
  )
);
