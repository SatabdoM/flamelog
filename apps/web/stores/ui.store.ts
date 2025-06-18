import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface UIState {
  isMobileSearchOpen: boolean;
  openMobileSearch: () => void;
  closeMobileSearch: () => void;
}

export const useUIStore = create<UIState>()(
  devtools((set) => ({
    isMobileSearchOpen: false,
    openMobileSearch: () => set({ isMobileSearchOpen: true }),
    closeMobileSearch: () => set({ isMobileSearchOpen: false }),
  }))
);
