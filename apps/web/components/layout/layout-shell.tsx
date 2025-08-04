'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { useUIStore } from '@/stores/ui.store';
import { useWindowSize } from '@/hooks/use-window-size';
import { cn } from '@workspace/ui/lib/utils';
import { SearchResult } from '@/components/search/search-result';

export const LayoutShell = ({ children }: { children: ReactNode }) => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const isMobileSearchOpen = useUIStore((state) => state.isMobileSearchOpen);

  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= 640;

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  return (
    <div
      className={cn(
        'layout-container main-content-container relative min-h-[calc(100vh-60px)] py-4'
      )}
    >
      <AnimatePresence mode="wait">
        {isMobile && isMobileSearchOpen ? (
          <motion.div
            key="search-result"
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
            key="main-content"
            initial={isFirstRender ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex justify-between gap-5"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
