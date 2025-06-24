'use client';

import { PencilLine } from 'lucide-react';

import { Button } from '@workspace/ui/components/button';
import { useModalStore } from '@/stores/modal.store';
import { PostComposeModal } from '@/features/post/components/post-composer/post-compose-modal';

export const PostComposeTrigger = () => {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <div className="space-y-2 rounded-md border p-2">
      <Button
        variant="secondary"
        className="w-full rounded-md"
        onClick={() => openModal(<PostComposeModal />)}
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
