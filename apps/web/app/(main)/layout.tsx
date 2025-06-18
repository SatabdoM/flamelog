import type { ReactNode } from 'react';

import { auth } from '@/features/auth/actions/server';
import { MainLayoutClient } from './_layout.client';

const MainLayout = async ({ children }: { children: ReactNode }) => {
  const { user } = await auth();

  return <MainLayoutClient user={user}>{children}</MainLayoutClient>;
};

export default MainLayout;
