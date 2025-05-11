'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { useUIStore } from '@/store/ui';
import { useWindowSize } from '@/hooks/use-window-size';
import { Navbar } from '@/components/navigation/navbar';
import { SearchBar } from '@/components/search/search-bar';
import { SearchResult } from '@/components/search/search-result';
import { MobileNav } from '@/components/navigation/mobile-nav';
import { PrimarySidebar } from '@/components/navigation/primary-sidebar';
import { SecondarySidebar } from '@/components/navigation/secondary-sidebar';

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const isMobileSearchOpen = useUIStore((state) => state.isMobileSearchOpen);

  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= 640;

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 h-15 w-full border-b backdrop-blur">
        <AnimatePresence mode="wait">
          {isMobile && isMobileSearchOpen ? (
            <motion.div
              key="searchbar"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.15,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 origin-top"
            >
              <SearchBar />
            </motion.div>
          ) : (
            <motion.div
              key="navbar"
              initial={isFirstRender ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="absolute inset-0"
            >
              <Navbar />
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main content */}
      <div className="layout-container relative min-h-[calc(100vh-60px)] py-4">
        <AnimatePresence mode="wait">
          {isMobile && isMobileSearchOpen ? (
            <motion.div
              key="searchbar"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.15,
                ease: 'easeInOut',
              }}
            >
              <SearchResult />
            </motion.div>
          ) : (
            <motion.div
              key="navbar"
              initial={isFirstRender ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex justify-between gap-8"
            >
              {/* height = 100vh - header height - padding of the parent container */}
              <aside className="sticky top-[calc(60px+16px)] hidden h-[calc(100vh-60px-32px)] lg:block">
                <PrimarySidebar />
              </aside>
              <main className="flex-grow-1">{children}</main>
              <aside className="sticky top-[calc(60px+16px)] hidden h-[calc(100vh-60px-32px)] lg:block">
                <SecondarySidebar />
              </aside>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom menu bar (mobile only) */}
      <MobileNav />
    </>
  );
};

export default MainLayout;
