'use client';

import type { ReactNode } from 'react';

import { MobileNav } from '@/components/mobile-nav';
import { useUIStore } from '@/store/ui';
import SearchResult from '@/components/search-result';
import { TopBar } from '@/components/top-bar';

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
