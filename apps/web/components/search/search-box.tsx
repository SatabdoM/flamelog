'use client';

import { useEffect } from 'react';
import { SearchIcon } from 'lucide-react';

import { useUIStore } from '@/store/ui';
import { useWindowSize } from '@/hooks/use-window-size';
import { Input } from '@workspace/ui/components/input';

export const SearchBox = () => {
  const openMobileSearch = useUIStore((state) => state.openMobileSearch);

  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= 640;

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();

        if (isMobile) {
          openMobileSearch();
        }
      }
    };
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isMobile, openMobileSearch]);

  return (
    <div
      className="relative"
      onClick={(e) => {
        if (isMobile) {
          e.stopPropagation();
          e.preventDefault();

          openMobileSearch();
        }
      }}
    >
      <SearchIcon className="text-muted-foreground absolute top-0 bottom-0 left-2.5 size-4.5 h-full" />
      <Input placeholder="Search flamelog..." className="pl-8.5" />
    </div>
  );
};
