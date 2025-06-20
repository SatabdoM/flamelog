'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';

import { Editor } from '@/components/editor/editor';
import { Button } from '@workspace/ui/components/button';
import { useWindowSize } from '@/hooks/use-window-size';
import { cn } from '@workspace/ui/lib/utils';

const PostPage = () => {
  const router = useRouter();
  const [value, setValue] = useState('');

  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= 640;

  const onClose = () => {
    router.back();
  };

  return (
    <>
      {isMobile ? (
        <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 h-15 w-full border-b backdrop-blur">
          <div className="layout-container absolute inset-0 flex items-center justify-between gap-4">
            <Button variant="ghost" size="icon" className="rounded-full" onClick={onClose}>
              <X className="size-4" />
            </Button>
            <Button size="sm">Post</Button>
          </div>
        </header>
      ) : (
        <div className="flex h-12 items-center justify-end gap-4">
          <Button size="sm">Post</Button>
        </div>
      )}

      <div className={cn(isMobile ? 'h-[calc(100dvh-60px)]' : 'mt-2')}>
        <Editor
          content={value}
          onChange={setValue}
          layoutVariant={isMobile ? 'page' : 'modal'}
          className={!isMobile ? 'max-w-none' : ''}
        />
      </div>
    </>
  );
};

export default PostPage;
