'use client';

import { useModalStore } from '@/stores/modal-store';
import { Dialog } from '@workspace/ui/components/dialog';

export const Modal = () => {
  const { isOpen, closeModal, modalContent } = useModalStore();

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) closeModal();
      }}
    >
      {modalContent}
    </Dialog>
  );
};
