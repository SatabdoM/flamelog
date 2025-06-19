'use client';

import { useEffect, useState } from 'react';
import { useEditor, EditorContent, FocusPosition } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link'; // For links
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'; // For colorful code blocks
import Placeholder from '@tiptap/extension-placeholder'; // For placeholder text
import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
import { all, createLowlight } from 'lowlight'; // For syntax highlighting
import { Toolbar } from './toolbar';

import './styles.css';

// Initialize lowlight with common languages for syntax highlighting
const lowlight = createLowlight(all);

// This is only an example, all supported languages are already loaded above
// but you can also register only specific languages to reduce bundle-size
lowlight.register('html', html);
lowlight.register('css', css);
lowlight.register('js', js);
lowlight.register('ts', ts);

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
        class:
          'prose dark:prose-invert max-w-none border-input placeholder:text-muted-foreground focus-visible:ring-ring focus-visible:border-ring aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 field-sizing-content min-h-16 max-h-80 overflow-y-auto w-full rounded-b-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
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
