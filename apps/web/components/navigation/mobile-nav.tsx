import Link from 'next/link';

import { mobileNavMenus } from '@/constants/nav-menus';

export const MobileNav = () => {
  return (
    <footer className="bg-background/95 supports-[backdrop-filter]:bg-background/60 fixed bottom-0 z-50 h-16 w-full border-t backdrop-blur lg:hidden">
      <div className="layout-container flex h-full items-center justify-between gap-2">
        {mobileNavMenus.map((menu) => (
          <Link
            key={menu.label}
            href={menu.url}
            className="hover:bg-accent flex w-12 flex-grow flex-col items-center gap-1 rounded-md p-2 transition-all"
          >
            <menu.icon className="size-5" />
            <span className="line-clamp-1 text-[10px] font-light">{menu.label}</span>
          </Link>
        ))}
      </div>
    </footer>
  );
};
