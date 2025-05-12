'use client';

import { Button } from '@workspace/ui/components/button';
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  type DialogOptions,
} from '@workspace/ui/components/dialog';
import { Textarea } from '@workspace/ui/components/textarea';

export const LogComposeModal = (options: DialogOptions) => {
  return (
    <DialogContent options={options}>
      <DialogHeader>
        <DialogTitle>What have you learn&apos;t today?</DialogTitle>
        <DialogDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro inventore eligendi
          voluptate dolor dolorum perspiciatis dignissimos eum sapiente nam facilis!
        </DialogDescription>
      </DialogHeader>

      <div>
        <Textarea />
      </div>

      <DialogFooter>
        <Button>Save changes</Button>
        <Button variant="secondary">Cancel</Button>
      </DialogFooter>
    </DialogContent>
  );
};
