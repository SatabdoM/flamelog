'use client';

import { useUIStore } from '@/store/ui';
import { Navbar } from './navbar';
import { SearchBar } from './search-bar';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const TopBar = () => {
  const isMobileSearchOpen = useUIStore((state) => state.isMobileSearchOpen);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  return (
    <div className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 h-15 w-full border-b backdrop-blur">
      <AnimatePresence mode="wait">
        {!isMobileSearchOpen ? (
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
        ) : (
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
        )}
      </AnimatePresence>
    </div>
  );
};
