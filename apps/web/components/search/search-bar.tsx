'use client';

import { useEffect, useRef } from 'react';
import { ArrowLeft, SearchIcon } from 'lucide-react';

import { useUIStore } from '@/store/ui';
import { useWindowSize } from '@/hooks/use-window-size';
import { Button } from '@workspace/ui/components/button';

export const SearchBar = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const closeMobileSearch = useUIStore((state) => state.closeMobileSearch);

  const windowSize = useWindowSize();

  useEffect(() => {
    const isMobile = windowSize.width <= 640;

    if (!isMobile) {
      closeMobileSearch();
    }
  }, [windowSize, closeMobileSearch]);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMobileSearch();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [closeMobileSearch]);

  return (
    <div className="layout-container flex h-full items-center justify-between gap-2">
      <Button variant="ghost" size="icon" className="rounded-full" onClick={closeMobileSearch}>
        <ArrowLeft className="size-5" />
      </Button>

      <input
        ref={searchInputRef}
        placeholder="Search flamelog..."
        className="h-full w-full border-none bg-transparent outline-none"
      />

      <Button variant="secondary" size="icon" className="rounded-full">
        <SearchIcon className="size-4" />
      </Button>
    </div>
  );
};
