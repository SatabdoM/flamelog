import { create } from 'zustand';

type ModalStore = {
  isOpen: boolean;
  modalContent: React.ReactNode | null;
  openModal: (modalContent: React.ReactNode) => void;
  closeModal: () => void;
  clearModalContent: () => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  modalContent: null,
  openModal: (modalContent) => set({ isOpen: true, modalContent }),
  closeModal: () => set({ isOpen: false }),
  clearModalContent: () => set({ modalContent: null }), // Not re-setting this modal content to null on closeModal function because it will immediately remove the content and then the closing animation will complete so it doesn't look good. Also we are using shadcn dialog component to show the dialog, which when closed will automatically remove the content, so no need to manually reset the modalContent.
  // Also this function is not required, but kept it in case needed for some edge cases
}));
