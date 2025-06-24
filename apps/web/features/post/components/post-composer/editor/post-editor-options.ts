import { FocusPosition, UseEditorOptions } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { all, createLowlight } from 'lowlight';

// Initialize lowlight with common languages for syntax highlighting
const lowlight = createLowlight(all);

interface GetPostEditorOptions {
  content: string;
  onChange: (e: any) => void;
  placeholder?: string;
  autoFocus?: FocusPosition;
  editorClassName?: string;
}

export const getPostEditorOptions = ({
  content,
  onChange,
  placeholder,
  autoFocus,
  editorClassName,
}: GetPostEditorOptions): UseEditorOptions => ({
  extensions: [
    StarterKit.configure({ codeBlock: false, italic: false, strike: false }),
    Link.configure({ openOnClick: false, autolink: true }),
    CodeBlockLowlight.configure({ lowlight }),
    Placeholder.configure({ placeholder }),
  ],
  content,
  editorProps: {
    attributes: {
      class: editorClassName || '',
      'data-slot': 'textarea',
    },
  },
  onUpdate({ editor }) {
    onChange(editor.getHTML());
  },
  autofocus: autoFocus,
  immediatelyRender: false,
});
