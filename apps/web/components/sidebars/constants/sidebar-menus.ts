import { BookUser, Home, LibraryBig, Sparkles } from 'lucide-react';

import { NavMenu } from '../types/nav-menu';

export const sidebarNavMenus: NavMenu[] = [
  {
    label: 'Home',
    icon: Home,
    url: '/feed',
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
    url: '/profile/logs',
  },
];
