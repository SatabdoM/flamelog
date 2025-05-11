import type { MobileNavMenu } from '@/app/types/nav-menu';
import { BookUser, Home, LibraryBig, Sparkles, SquarePlus } from 'lucide-react';

export const mobileNavMenus: MobileNavMenu[] = [
  {
    label: 'Home',
    icon: Home,
    url: '/',
  },
  {
    label: 'Explore',
    icon: Sparkles,
    url: '/explore',
  },
  {
    label: 'Log',
    icon: SquarePlus,
    url: '/post',
  },
  {
    label: 'Learn',
    icon: LibraryBig,
    url: '/library',
  },
  {
    label: 'My Logs',
    icon: BookUser,
    url: '/my-logs',
  },
];
