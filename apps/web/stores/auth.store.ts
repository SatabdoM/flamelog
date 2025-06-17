import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { User } from '@/types/user';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;

  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        isAuthenticated: false,
        loading: false,
        error: null,

        setUser: (user) =>
          set({
            user,
            isAuthenticated: !!user,
          }),

        setLoading: (loading) => set({ loading }),

        setError: (error) => set({ error }),

        clearAuth: () =>
          set({
            user: null,
            isAuthenticated: false,
            error: null,
          }),
      }),
      {
        name: 'auth-storage',
        partialize: (state) => ({
          user: state.user,
          isAuthenticated: state.isAuthenticated,
        }),
      }
    )
  )
);
