import type { ReactNode } from 'react';

import { auth } from '@/features/auth/actions/server';
import { LayoutClient } from '@/components/layouts/layout-client';

const MainLayout = async ({ children }: { children: ReactNode }) => {
  const { user } = await auth();

  return (
    <LayoutClient user={user} variant="profile">
      {children}
    </LayoutClient>
  );
};

export default MainLayout;
