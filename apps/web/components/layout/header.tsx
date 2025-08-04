'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { useUIStore } from '@/stores/ui.store';
import { useWindowSize } from '@/hooks/use-window-size';
import { User } from '@/types/user';
import { Navbar } from '@/components/navigation/navbar';
import { SearchBar } from '@/components/search/search-bar';

export const Header = ({ user }: { user: User | null }) => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const isMobileSearchOpen = useUIStore((state) => state.isMobileSearchOpen);

  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= 640;

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 h-15 w-full border-b backdrop-blur">
      <AnimatePresence mode="wait">
        {isMobile && isMobileSearchOpen ? (
          <motion.div
            key="searchbar"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{
              duration: 0.1,
              ease: 'easeIn',
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
            transition={{ duration: 0.1 }}
            className="absolute inset-0"
          >
            <Navbar user={user} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
