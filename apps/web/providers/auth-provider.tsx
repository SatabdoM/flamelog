'use client';

import { useEffect, useLayoutEffect } from 'react';

import { useAuthStore } from '@/stores/auth-store';
import { User } from '@/types/user';

const TOKEN_REFRESH_INTERVAL = 1000 * 60 * 10; // 10 minutes

export const AuthProvider = ({
  user,
  children,
}: {
  user: User | null;
  children: React.ReactNode;
}) => {
  const hydrateAuth = useAuthStore((state) => state.hydrateAuth);
  const refreshAccessToken = useAuthStore((state) => state.refreshAccessToken);

  useEffect(() => {
    if (!user) return;
    refreshAccessToken();

    const refreshInterval = setInterval(() => refreshAccessToken(), TOKEN_REFRESH_INTERVAL);

    return () => {
      clearInterval(refreshInterval);
    };
  }, [user, refreshAccessToken]);

  // Immediate sync on mount
  useLayoutEffect(() => {
    if (user) {
      hydrateAuth(user);
    }
  }, [user]);

  return <>{children}</>;
};
