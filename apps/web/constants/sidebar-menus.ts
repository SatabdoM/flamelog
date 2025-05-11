import type { NavMenu } from '@/app/types/nav-menu';
import { BookUser, Home, LibraryBig, Sparkles } from 'lucide-react';

export const sidebarNavMenus: NavMenu[] = [
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
