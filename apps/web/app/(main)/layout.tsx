import type { ReactNode } from 'react';

import { getAuthServerSide } from '@/lib/services/auth';
import { MainLayoutClient } from './_layout.client';
import { RefreshAuth } from '@/components/auth/refresh-auth';

const MainLayout = async ({ children }: { children: ReactNode }) => {
  const { user } = await getAuthServerSide();

  return (
    <MainLayoutClient user={user}>
      <RefreshAuth />
      {children}
    </MainLayoutClient>
  );
};

export default MainLayout;
