'use client';

import { PencilLine } from 'lucide-react';

import { Button } from '@workspace/ui/components/button';
import { useModalStore } from '@/stores/modal-store';
import { LogComposeModal } from '@/components/modals/log-compose-modal';

export const LogComposeTrigger = () => {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <div className="space-y-2 border p-2">
      <Button
        variant="secondary"
        className="w-full rounded-md"
        onClick={() => openModal(<LogComposeModal />)}
      >
        <PencilLine className="size-5" />
        <p>Log today&apos;s learning</p>
      </Button>

      <p className="text-muted-foreground text-center text-xs md:text-sm">
        Keep the flame 🔥 burning by adding the logs 🪵
      </p>
    </div>
  );
};
