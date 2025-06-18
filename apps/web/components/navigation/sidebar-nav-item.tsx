import Link from 'next/link';

import { NavMenu } from '@/components/navigation/types/nav-menu';

interface SidebarNavItemProps {
  navMenu: NavMenu;
}

export const SidebarNavItem = ({ navMenu }: SidebarNavItemProps) => {
  return (
    <li className="hover:bg-secondary/30 text-sm font-medium transition-all">
      <Link href={navMenu.url} className="flex items-center gap-2 px-4 py-2.5">
        {navMenu.icon && <navMenu.icon className="size-5" />}
        {navMenu.label}
      </Link>
    </li>
  );
};
