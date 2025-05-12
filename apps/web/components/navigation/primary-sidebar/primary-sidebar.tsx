'use client';

import { sidebarNavMenus } from '@/constants/sidebar-menus';
import { ProfileCard } from './profile-card';
import { SidebarNavItem } from '../sidebar-nav-item';
import { Button } from '@workspace/ui/components/button';
import { Bell, BookMarked, Plus, Settings } from 'lucide-react';
import { useModalStore } from '@/stores/modal-store';
import { LogComposeModal } from '@/components/modals/log-compose-modal';

export const PrimarySidebar = () => {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <div className="flex h-full w-[280px] flex-col overflow-y-auto border">
      <ProfileCard />

      <div className="m-2">
        <Button className="w-full rounded-lg" onClick={() => openModal(<LogComposeModal />)}>
          <Plus className="size-5" />
          New Log
        </Button>
      </div>

      <ul className="group">
        {sidebarNavMenus.map((menu) => (
          <SidebarNavItem key={menu.label} navMenu={menu} />
        ))}
      </ul>

      <div className="mt-auto space-y-1 pb-2">
        <div className="mx-2">
          <Button variant="outline" size="lg" className="w-full justify-start rounded-md">
            <Bell />
            Notifications
          </Button>
        </div>

        <div className="mx-2">
          <Button variant="outline" size="lg" className="w-full justify-start rounded-md">
            <BookMarked />
            Saved Posts
          </Button>
        </div>

        <div className="mx-2">
          <Button variant="outline" size="lg" className="w-full justify-start rounded-md">
            <Settings />
            Settings and privacy
          </Button>
        </div>
      </div>
    </div>
  );
};
