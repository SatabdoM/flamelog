import Link from 'next/link';

import { NavMenu } from '@/app/types/nav-menu';

interface SidebarNavItemProps {
  navMenu: NavMenu;
}

export const SidebarNavItem = ({ navMenu }: SidebarNavItemProps) => {
  return (
    <li className="hover:bg-primary/10 hover:text-primary border-b text-sm font-medium transition-all first:border-t">
      <Link href={navMenu.url} className="flex items-center gap-2 px-4 py-2.5">
        {navMenu.icon && <navMenu.icon className="size-5" />}
        {navMenu.label}
      </Link>
    </li>
  );
};
