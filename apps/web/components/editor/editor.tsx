'use client';

import { useEffect, useState } from 'react';
import { useEditor, EditorContent, FocusPosition } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { all, createLowlight } from 'lowlight';

import './styles/editor.css';
import { cn } from '@workspace/ui/lib/utils';
import { Toolbar } from './toolbar';

// Initialize lowlight with common languages for syntax highlighting
const lowlight = createLowlight(all);

type EditorLayoutVariant = 'modal' | 'page';

interface EditorProps {
  content: string;
  onChange: (e: any) => void;
  placeholder?: string;
  autoFocus?: FocusPosition;
  className?: string;
  layoutVariant?: EditorLayoutVariant;
}

export const Editor = ({
  content,
  onChange,
  placeholder,
  autoFocus,
  layoutVariant = 'modal',
  className,
}: EditorProps) => {
  const [isMounted, setIsMounted] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ codeBlock: false, italic: false, strike: false }),
      Link.configure({ openOnClick: false, autolink: true }),
      CodeBlockLowlight.configure({ lowlight }),
      Placeholder.configure({ placeholder }),
    ],
    content,
    editorProps: {
      attributes: {
        class: cn(
          // tailwind prose class to apply basic typography stilings
          'prose dark:prose-invert max-w-none overflow-y-auto',
          // textarea ui component classes to make it look the same
          'border-input placeholder:text-muted-foreground focus-visible:ring-ring focus-visible:border-ring aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 min-h-16 w-full border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50',
          // stylings based on layoutVariant
          layoutVariant === 'modal' ? 'max-h-80 rounded-b-md' : 'flex-1 h-full',
          className
        ),
        'data-slot': 'textarea',
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    autofocus: autoFocus,
  });

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

  // Page variant
  if (layoutVariant === 'page') {
    return (
      <div className="relative h-full border shadow-sm">
        <EditorContent editor={editor} className="h-[calc(100%-46px)]" />
        <Toolbar editor={editor} className="bottom-0 h-[46px]" />
      </div>
    );
  }

  // Modal variant
  return (
    <div className="rounded-md border shadow-sm">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} className="rounded-b-md" />
    </div>
  );
};
