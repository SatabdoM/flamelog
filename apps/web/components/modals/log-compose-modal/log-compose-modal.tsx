'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { useModalStore } from '@/stores/modal-store';
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  type DialogOptions,
} from '@workspace/ui/components/dialog';
import { Textarea } from '@workspace/ui/components/textarea';
import { Button } from '@workspace/ui/components/button';
import { Form, FormControl, FormField, FormItem } from '@workspace/ui/components/form';
import { LogSchema } from './schema';

export const LogComposeModal = ({ options = {} }: { options?: DialogOptions }) => {
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
        <DialogTitle>Jot down what you learned today — it&apos;ll be priceless later.</DialogTitle>
        <DialogDescription className="text-secondary dark:text-secondary-foreground font-semibold">
          TL;DR: Small wins count too!
        </DialogDescription>
      </DialogHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mb-4">
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Today I've learned..." className="h-32" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <DialogFooter>
            <Button type="submit">Create log</Button>
            <Button type="button" variant="secondary" onClick={closeModal}>
              Cancel
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
};
