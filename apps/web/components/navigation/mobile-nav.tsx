'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

import { mobileNavMenus } from '@/components/navigation/constants/nav-menus';
import { cn } from '@workspace/ui/lib/utils';
import { useWindowSize } from '@/hooks/use-window-size';

export const MobileNav = () => {
  const { width, height } = useWindowSize();
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const initialViewportHeight = useRef(0);

  useEffect(() => {
    // On first mount, capture the initial viewport height (keyboard likely closed)
    if (initialViewportHeight.current === 0) {
      initialViewportHeight.current = window.innerHeight;
    }

    // This threshold (e.g., 100px) accounts for typical browser toolbar changes,
    // but a significant drop usually means the keyboard appeared.
    // Adjust this threshold if needed for your specific mobile browser behavior.
    const keyboardThreshold = 150; // A reasonable pixel change to detect keyboard

    // Only detect keyboard if it's a mobile device (based on width)
    // and if the window height has shrunk significantly.
    if (width <= 640) {
      // Use your mobile breakpoint
      const currentViewportHeight = window.innerHeight;
      const heightDifference = initialViewportHeight.current - currentViewportHeight;

      if (heightDifference > keyboardThreshold) {
        setIsKeyboardOpen(true);
      } else {
        setIsKeyboardOpen(false);
      }
    } else {
      setIsKeyboardOpen(false); // Keyboard not relevant on desktop
    }

    // Re-measure initial height if window resizes significantly (e.g., device rotation)
    // This part can be tricky to get perfect.
    // Another approach is to store the "true" initial height only once if you are sure
    // keyboard is closed initially, e.g. based on a user interaction or route load.
  }, [width, height]); // Re-run when window size changes

  // Determine the padding based on keyboard status
  const dynamicHeightClass = isKeyboardOpen
    ? 'h-[4rem]' // When keyboard is open, remove extra height from safe-area
    : 'h-[4rem+env(safe-area-inset-bottom)]'; // When keyboard is closed, add height for home indicator

  return (
    <footer
      className={cn(
        'bg-background/95 supports-[backdrop-filter]:bg-background/60 fixed bottom-0 z-50 w-full border-t backdrop-blur lg:hidden',
        dynamicHeightClass // Apply dynamic height here
      )}
    >
      <div className="layout-container flex h-full items-center justify-between gap-2">
        {mobileNavMenus.map((menu) => (
          <Link
            key={menu.label}
            href={menu.url}
            className="hover:bg-accent flex w-12 flex-grow flex-col items-center gap-1 rounded-md p-2 transition-all"
          >
            <menu.icon className="size-5.5" />
            <span className="line-clamp-1 text-[10px]">{menu.label}</span>
          </Link>
        ))}
      </div>
    </footer>
  );
};
