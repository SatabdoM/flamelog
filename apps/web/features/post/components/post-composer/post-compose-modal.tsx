'use client';

import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

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
import { PostComposeSchema } from '@/features/post/schemas/post-compose-schema';
import { createPost } from '@/features/post/actions/server/create-post';
import { PostContentEditor } from './editor';
import { PostImagesEditor } from './editor/images-editor';
import { ImageUploadButton } from './editor/image-upload-button';
import { usePostImageUpload } from '@/features/post/hooks/use-post-image-upload';
import { UploadedImage } from '@/features/post/types';

interface PostComposeModalProps {
  options?: DialogOptions;
}

export const PostComposeModal = ({ options = {} }: PostComposeModalProps) => {
  const [isPending, startTransition] = useTransition();
  const closeModal = useModalStore((state) => state.closeModal);

  const form = useForm<PostComposeSchema>({
    resolver: zodResolver(PostComposeSchema),
    defaultValues: {
      content: '',
      images: [],
    },
  });

  const images = form.watch('images');
  const setImages = (newImages: UploadedImage[]) => form.setValue('images', newImages);

  const { startUpload, isUploading, progress, removeImage } = usePostImageUpload({
    images,
    setImages,
  });

  const onSubmit = async (values: PostComposeSchema) => {
    if (values.content.trim() === '') {
      toast.warning('Content cannot be empty');
      return;
    }

    console.log(values);

    startTransition(async () => {
      const res = await createPost(values);
      const { error, post } = res;

      if (error) {
        console.log('Error creating post', error.message);
        toast.error(error.message);
        return;
      }

      console.log('Post created', post);
      toast.success('Post created');

      // Reset the form & close the modal.
      form.reset();
      closeModal();
    });
  };

  const handleDiscard = () => {
    form.reset();
    closeModal();
  };

  return (
    <DialogContent options={options}>
      <DialogHeader>
        <DialogTitle>Capture Today&apos;s Learnings</DialogTitle>
        <DialogDescription className="text-muted-foreground font-semibold">
          Don't let valuable insights slip away, documenting even small wins helps build your
          knowledge.
        </DialogDescription>
      </DialogHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mt-1.5 mb-4 max-h-[70dvh] space-y-4 overflow-y-auto">
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <PostContentEditor
                      content={field.value}
                      onChange={field.onChange}
                      autoFocus="end"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <PostImagesEditor
                      images={field.value}
                      removeImage={removeImage}
                      isUploading={isUploading}
                      progress={progress}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <DialogFooter>
            <Button disabled={isPending} type="submit">
              {isPending && <Loader2 className="size-4 animate-spin" />}
              Create Post
            </Button>

            <Button disabled={isPending} type="button" variant="outline" onClick={handleDiscard}>
              Discard
            </Button>

            <div className="my-auto mb-2 text-center sm:mr-auto md:text-left">
              <p className="text-muted-foreground text-sm">You can only upload a max of 4 files</p>
            </div>
            <ImageUploadButton
              startUpload={startUpload}
              isUploading={isUploading}
              disabled={images.length >= 4}
            />
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
};
