import type { ReactNode } from 'react';

import { getAuthServerSide } from '@/lib/services/auth';
import { MainLayoutClient } from './_layout.client';

const MainLayout = async ({ children }: { children: ReactNode }) => {
  const { user } = await getAuthServerSide();

  return <MainLayoutClient user={user}>{children}</MainLayoutClient>;
};

export default MainLayout;
