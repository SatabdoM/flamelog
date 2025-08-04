import type { ReactNode } from 'react';

import { auth } from '@/features/auth/actions/server';
import { Header } from '@/components/layout/header';
import { LayoutShell } from '@/components/layout/layout-shell';
import { SidebarFrame } from '@/components/layout/sidebar-frame';
import { PrimarySidebar } from '@/components/sidebars/primary-sidebar';
import { MainFrame } from '@/components/layout/main-frame';
import { SecondarySidebar } from '@/components/sidebars/secondary-sidebar';
import { MobileNav } from '@/components/navigation/mobile-nav';

const MainLayout = async ({ children }: { children: ReactNode }) => {
  const { user } = await auth();

  return (
    <>
      <Header user={user} />

      <LayoutShell>
        <SidebarFrame>
          <PrimarySidebar />
        </SidebarFrame>

        <MainFrame>{children}</MainFrame>

        <SidebarFrame>
          <SecondarySidebar />
        </SidebarFrame>
      </LayoutShell>

      <MobileNav />
    </>
  );
};

export default MainLayout;
