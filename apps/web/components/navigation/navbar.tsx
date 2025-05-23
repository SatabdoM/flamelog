import React from 'react';
import Link from 'next/link';
import { Bell } from 'lucide-react';

import { Logo } from '@workspace/ui/components/logo';
import { UserButton } from '../auth/user-button';
import { Button } from '@workspace/ui/components/button';
import { ThemeToggle } from '../theme-toggle';
import { SearchBox } from '../search/search-box';
import { NavMenus } from './navbar/nav-menus';
import { User } from '@/types/user';

interface NavbarProps {
  user: User | null;
}

export const Navbar = ({ user }: NavbarProps) => {
  const notificationCount = 2;

  return (
    <div className="layout-container flex h-full items-center justify-between gap-4">
      <Logo shape="squircle" href="/" />

      <nav className="hidden lg:flex">
        <NavMenus />
      </nav>

      <div className="flex flex-grow items-center justify-end gap-2 lg:ml-6">
        <div className="w-[min(100%,500px)] max-w-[500px] flex-grow sm:block">
          <SearchBox />
        </div>

        <div className="block">
          <ThemeToggle />
        </div>

        <div className="relative block">
          {!!notificationCount && (
            <span className="bg-destructive absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full text-[0.65rem] font-bold text-white">
              {notificationCount}
            </span>
          )}

          <Button variant="outline" size="icon">
            <Bell />
          </Button>
        </div>

        {!!user ? (
          <UserButton user={user} />
        ) : (
          <Button asChild>
            <Link href="/auth/login">Login</Link>
          </Button>
        )}
      </div>
    </div>
  );
};
