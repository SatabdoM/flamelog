'use client';

import type { ReactNode } from 'react';

import { useUIStore } from '@/store/ui';
import { TopBar } from '@/components/top-bar';
import { SearchResult } from '@/components/search/search-result';
import { MobileNav } from '@/components/navigation/mobile-nav';

const MainLayout = ({ children }: { children: ReactNode }) => {
  const isMobileSearchOpen = useUIStore((state) => state.isMobileSearchOpen);

  return (
    <>
      <TopBar />
      <main className="container py-6">{isMobileSearchOpen ? <SearchResult /> : children}</main>
      <MobileNav />
    </>
  );
};

export default MainLayout;
