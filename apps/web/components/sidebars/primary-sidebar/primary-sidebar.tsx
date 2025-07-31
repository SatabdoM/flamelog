'use client';

import Link from 'next/link';
import { BookMarked, Plus, Settings } from 'lucide-react';

import { ProfileCard } from './profile-card';
import { sidebarNavMenus } from '../constants/sidebar-menus';
import { SidebarNavItem } from '../sidebar-nav-item';
import { Button } from '@workspace/ui/components/button';
import { useModalStore } from '@/stores/modal.store';
import { PostComposeModal } from '@/features/post/components/post-composer';

export const PrimarySidebar = () => {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <div className="flex h-full w-[280px] flex-col overflow-y-auto rounded-md border">
      <ProfileCard />

      <div className="m-2">
        <Button
          variant="secondary"
          className="w-full rounded-lg"
          onClick={() => openModal(<PostComposeModal />)}
        >
          <Plus className="size-5" />
          New Log
        </Button>
      </div>

      <ul className="group divide-y border-t border-b">
        {sidebarNavMenus.map((menu) => (
          <SidebarNavItem key={menu.label} navMenu={menu} />
        ))}
      </ul>

      <div className="mt-auto space-y-1 pb-2">
        <div className="mx-2">
          <Button variant="outline" size="lg" className="w-full justify-start rounded-md" asChild>
            <Link href="/profile/saved">
              <BookMarked />
              Saved Posts
            </Link>
          </Button>
        </div>

        <div className="mx-2">
          <Button variant="outline" size="lg" className="w-full justify-start rounded-md" asChild>
            <Link href="/settings">
              <Settings />
              Settings and privacy
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
