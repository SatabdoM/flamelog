'use client';

import { useEffect, useState } from 'react';
import { useEditor, EditorContent, FocusPosition } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link'; // For links
import Placeholder from '@tiptap/extension-placeholder'; // For placeholder text
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'; // For colorful code blocks
import { all, createLowlight } from 'lowlight'; // For syntax highlighting

import './styles/editor.css';
import { cn } from '@workspace/ui/lib/utils';
import { Toolbar } from './toolbar';

// Initialize lowlight with common languages for syntax highlighting
const lowlight = createLowlight(all);

interface EditorProps {
  content: string;
  onChange: (e: any) => void;
  placeholder?: string;
  autoFocus?: FocusPosition;
}

const Editor = ({ content, onChange, placeholder, autoFocus = false }: EditorProps) => {
  const [isMounted, setIsMounted] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false, // Disable StarterKit's default codeBlock; we're using CodeBlockLowlight instead
        // Keep other StarterKit features like bold, italic, lists, headings, history
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Placeholder.configure({
        placeholder,
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class: cn(
          // tailwind prose class to apply basic typography stilings
          'prose dark:prose-invert',
          // max-w-none to fix styling override by prose, and giving overall max-h to the editor
          'max-w-none max-h-80 overflow-y-auto',
          // textarea ui component classes to make it look the same
          'border-input placeholder:text-muted-foreground focus-visible:ring-ring focus-visible:border-ring aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 field-sizing-content min-h-16 w-full rounded-b-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50'
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

  return (
    <div className="rounded-md border shadow-sm">
      <Toolbar editor={editor} /> {/* Pass the editor instance to your MenuBar */}
      <EditorContent editor={editor} className="rounded-b-md" /> {/* Main editor content area */}
    </div>
  );
};

export default Editor;
