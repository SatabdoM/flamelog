import type { ReactNode } from 'react';

import { auth } from '@/features/auth/actions/server';
import { Header } from '@/components/layout/header';
import { LayoutShell } from '@/components/layout/layout-shell';
import { SidebarFrame } from '@/components/layout/sidebar-frame';
import { ProfileSidebar } from '@/features/profile/components/profile-sidebar';
import { MainFrame } from '@/components/layout/main-frame';
import { MobileNav } from '@/components/navigation/mobile-nav';

const ProfileLayout = async ({ children }: { children: ReactNode }) => {
  const { user } = await auth();

  return (
    <>
      <Header user={user} />

      <LayoutShell>
        <SidebarFrame>
          <ProfileSidebar username={user?.username!} />
        </SidebarFrame>

        <MainFrame>{children}</MainFrame>
      </LayoutShell>

      <MobileNav />
    </>
  );
};

export default ProfileLayout;
