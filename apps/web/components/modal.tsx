'use client';

import { useModalStore } from '@/stores/modal-store';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@workspace/ui/components/dialog';

export const Modal = () => {
  const { isOpen, closeModal, modalContent, options } = useModalStore();

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) closeModal();
      }}
    >
      <DialogContent
        className="sm:max-w-[425px]"
        onInteractOutside={(e) => {
          if (options.closeOnOutsideClick) return;
          e.preventDefault();
        }}
        onEscapeKeyDown={(e) => {
          if (!options.closeOnEscKeyPress) return;
          e.preventDefault();
        }}
      >
        <DialogHeader className="hidden">
          <DialogTitle>Modal</DialogTitle>
        </DialogHeader>

        {modalContent}
      </DialogContent>
    </Dialog>
  );
};
