'use client';

import { useEditor, FocusPosition } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { all, createLowlight } from 'lowlight';

import { cn } from '@workspace/ui/lib/utils';

// Initialize lowlight with common languages for syntax highlighting
const lowlight = createLowlight(all);

export const usePostEditor = ({
  content,
  onChange,
  placeholder,
  autoFocus,
  editorClassName,
}: {
  content: string;
  onChange: (...event: any[]) => void;
  placeholder?: string;
  autoFocus?: FocusPosition;
  editorClassName?: string;
}) => {
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
          editorClassName
        ),
        'data-slot': 'textarea',
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    autofocus: autoFocus,
    immediatelyRender: false,
  });

  return { editor };
};
