import { create } from 'zustand';

interface UIState {
  isMobileSearchOpen: boolean;
  openMobileSearch: () => void;
  closeMobileSearch: () => void;
}

export const useUIStore = create<UIState>()((set) => ({
  isMobileSearchOpen: false,
  openMobileSearch: () => set({ isMobileSearchOpen: true }),
  closeMobileSearch: () => set({ isMobileSearchOpen: false }),
}));
