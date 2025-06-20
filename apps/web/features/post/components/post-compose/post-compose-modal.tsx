'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { useModalStore } from '@/stores/modal.store';
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  type DialogOptions,
} from '@workspace/ui/components/dialog';
import { Button } from '@workspace/ui/components/button';
import { Form, FormControl, FormField, FormItem } from '@workspace/ui/components/form';
import { LogSchema } from './schema';
import { Editor } from '@/components/editor/editor';

interface PostComposeModalProps {
  options?: DialogOptions;
}

export const PostComposeModal = ({ options = {} }: PostComposeModalProps) => {
  const closeModal = useModalStore((state) => state.closeModal);

  const form = useForm<LogSchema>({
    resolver: zodResolver(LogSchema),
    defaultValues: {
      content: '',
    },
  });

  const onSubmit = async (values: LogSchema) => {
    if (values.content.trim() === '') {
      toast.warning('Content cannot be empty');
      return;
    }

    console.log(values);
    toast.success('Log created');
  };

  return (
    <DialogContent options={options}>
      <DialogHeader>
        <DialogTitle>Capture Today&apos;s Learnings</DialogTitle>
        <DialogDescription className="text-muted dark:text-muted-foreground font-semibold">
          Don't let valuable insights slip away, documenting even small wins helps build your
          knowledge.
        </DialogDescription>
      </DialogHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mt-1.5 mb-4">
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Editor content={field.value} onChange={field.onChange} autoFocus="end" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <DialogFooter>
            <Button type="submit">Create log</Button>
            <Button type="button" variant="outline" onClick={closeModal}>
              Cancel
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
};
