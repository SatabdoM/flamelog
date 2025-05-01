import type { ReactNode } from 'react';
import { create } from 'zustand';

interface UIState {
  isSidebarOpen: boolean;
  isModalOpen: boolean;
  modalContent: ReactNode | null;
  isMobileSearchOpen: boolean;
  toggleSidebar: () => void;
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
  openMobileSearch: () => void;
  closeMobileSearch: () => void;
}

export const useUIStore = create<UIState>()((set) => ({
  isSidebarOpen: false,
  isModalOpen: false,
  modalContent: null,
  isMobileSearchOpen: false,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  openModal: (content) => set({ isModalOpen: true, modalContent: content }),
  closeModal: () => set({ isModalOpen: false, modalContent: null }),
  openMobileSearch: () => set({ isMobileSearchOpen: true }),
  closeMobileSearch: () => set({ isMobileSearchOpen: false }),
}));
