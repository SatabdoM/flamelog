'use client';

import { useEffect } from 'react';

import { useAuthStore } from '@/stores/auth-store';

const TOKEN_REFRESH_INTERVAL = 1000 * 60 * 10; // 10 minutes

export const RefreshAuth = () => {
  const refreshAccessToken = useAuthStore((state) => state.refreshAccessToken);

  useEffect(() => {
    refreshAccessToken();

    const refreshInterval = setInterval(() => refreshAccessToken(), TOKEN_REFRESH_INTERVAL);

    return () => {
      clearInterval(refreshInterval);
    };
  }, [refreshAccessToken]);

  return null;
};
