'use client';

import { useEffect, useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { useEditor, EditorContent, FocusPosition } from '@tiptap/react';

import './styles/editor.css';
import { Toolbar } from './toolbar';
import { getPostEditorOptions } from './post-editor-options';

import { cn } from '@workspace/ui/lib/utils';

const editorVariants = cva(
  cn(
    // tailwind prose class to apply basic typography stilings
    'prose dark:prose-invert max-w-none overflow-y-auto',
    // textarea ui component classes to make it look the same
    'border-input placeholder:text-muted-foreground aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 min-h-16 w-full border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50'
  ),
  {
    variants: {
      variant: {
        modal: 'rounded-b-md max-h-64',
        page: '',
      },
    },
    defaultVariants: {
      variant: 'modal',
    },
  }
);

interface PostContentEditorProps extends VariantProps<typeof editorVariants> {
  content: string;
  onChange: (e: any) => void;
  placeholder?: string;
  autoFocus?: FocusPosition;
  className?: string;
}

export const PostContentEditor = ({
  variant = 'modal',
  content,
  onChange,
  placeholder,
  autoFocus,
  className,
}: PostContentEditorProps) => {
  const [isMounted, setIsMounted] = useState(false);

  const editor = useEditor(
    getPostEditorOptions({
      content,
      onChange,
      placeholder,
      autoFocus,
      editorClassName: cn(editorVariants({ variant, className })),
    })
  );

  useEffect(() => {
    setIsMounted(true);

    // Cleanup editor instance on unmount to prevent memory leaks
    return () => {
      editor?.destroy();
    };
  }, [editor]); // Depend on 'editor' to ensure correct cleanup on re-renders if editor instance changes

  if (!isMounted) {
    return null;
  }

  return (
    <div className={cn('relative border shadow-sm', variant === 'modal' && 'rounded-md')}>
      <Toolbar
        editor={editor}
        className={cn('border-input', variant === 'page' && 'rounded-t-none')}
      />
      <EditorContent editor={editor} className={cn(variant === 'modal' && 'rounded-b-md')} />
    </div>
  );
};
