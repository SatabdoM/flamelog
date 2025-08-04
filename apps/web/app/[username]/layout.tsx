import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { getQueryClient } from '@/lib/react-query';
import { auth } from '@/features/auth/actions/server';
import { getProfile } from '@/features/profile/actions/server/get-profile';
import { Header } from '@/components/layout/header';
import { LayoutShell } from '@/components/layout/layout-shell';
import { SidebarFrame } from '@/components/layout/sidebar-frame';
import { ProfileSidebar } from '@/features/profile/components/profile-sidebar';
import { MainFrame } from '@/components/layout/main-frame';
import { MobileNav } from '@/components/navigation/mobile-nav';

interface ProfileLayoutProps {
  children: ReactNode;
  params: Promise<{
    username: string;
  }>;
}

const UsernameLayout = async ({ children, params }: ProfileLayoutProps) => {
  const { user } = await auth();
  const { username } = await params;

  const queryClient = getQueryClient();

  // Since I'm getting the profile in the layout itself, and then hydrating the client using this query client, the same query won't get refetched in the client side.
  const profile = await queryClient.fetchQuery({
    queryKey: ['profile', username],
    queryFn: () => getProfile(username),
  });

  if (!profile) return notFound();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Header user={user} />

      <LayoutShell>
        <SidebarFrame>
          <ProfileSidebar username={username} />
        </SidebarFrame>

        <MainFrame>{children}</MainFrame>
      </LayoutShell>

      <MobileNav />
    </HydrationBoundary>
  );
};

export default UsernameLayout;
