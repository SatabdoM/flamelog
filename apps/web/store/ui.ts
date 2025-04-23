import type { ReactNode } from 'react';
import { create } from 'zustand';

interface UIState {
  isSidebarOpen: boolean;
  isModalOpen: boolean;
  modalContent: ReactNode | null;
  toggleSidebar: () => void;
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
}

export const useUIStore = create<UIState>()((set) => ({
  isSidebarOpen: false,
  isModalOpen: false,
  modalContent: null,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  openModal: (content) => set({ isModalOpen: true, modalContent: content }),
  closeModal: () => set({ isModalOpen: false, modalContent: null }),
}));
