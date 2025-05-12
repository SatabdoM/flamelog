import { create } from 'zustand';

type ModalOptions = {
  showDefaultClose?: boolean;
  closeOnOutsideClick?: boolean;
  closeOnEscKeyPress?: boolean;
};

const defaultOptions: ModalOptions = {
  showDefaultClose: true,
  closeOnOutsideClick: false,
  closeOnEscKeyPress: true,
};

type ModalStore = {
  isOpen: boolean;
  modalContent: React.ReactNode | null;
  options: ModalOptions;
  openModal: (modalContent: React.ReactNode, options?: ModalOptions) => void;
  closeModal: () => void;
  clearModalContent: () => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  modalContent: null,
  options: defaultOptions,
  openModal: (modalContent, options) =>
    set({
      isOpen: true,
      modalContent,
      options: { ...defaultOptions, ...options }, // Merge with defaults
    }),
  closeModal: () => set({ isOpen: false }),
  clearModalContent: () => set({ modalContent: null }), // Not re-setting this modal content to null on closeModal function because it will immediately remove the content and then the closing animation will complete so it doesn't look good. Also we are using shadcn dialog component to show the dialog, which when closed will automatically remove the content, so no need to manually reset the modalContent.
  // Also this function is not required, but kept it in case needed for some edge cases
}));
