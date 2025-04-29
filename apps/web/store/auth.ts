import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  roles: string[];
  [key: string]: any;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
  setAuth: (user: User, token: string) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      token: null,
      setAuth: (user, token) => {
        set({ user, isAuthenticated: true, token });
        // Set cookie for middleware
        document.cookie = `authToken=${token}; path=/`;
      },
      clearAuth: () => {
        set({ user: null, isAuthenticated: false, token: null });
        // Set cookie for middleware
        document.cookie = `authToken=; path=/`;
      },
    }),
    {
      name: 'auth-storage',
      // Only persist these fields
      partialize: (state) => ({
        token: state.token,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
