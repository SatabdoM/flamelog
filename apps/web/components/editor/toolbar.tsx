'use client';

import React from 'react';
import { Editor } from '@tiptap/react';
import {
  CodeIcon,
  LinkIcon,
  ListIcon,
  ListOrderedIcon,
  // SmileIcon,
  UndoIcon,
  RedoIcon,
} from 'lucide-react';

import { Button } from '@workspace/ui/components/button';

interface ToolbarProps {
  editor: Editor | null;
}

export const Toolbar = ({ editor }: ToolbarProps) => {
  // const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  // const emojis = ['👍', '✨', '🔥', '🚀', '💡', '🤔', '🎉', '💻', '📚', '😀'];

  if (!editor) {
    return null;
  }

  const setLink = () => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);

    if (url === null) {
      return;
    }

    if (url === '') {
      editor.chain().focus().unsetLink().run();
      return;
    }

    editor.chain().focus().setLink({ href: url }).run();
  };

  // const insertEmoji = (emoji: string) => {
  //   editor.chain().focus().insertContent(emoji).run();
  //   setShowEmojiPicker(false);
  // };

  // Helper for consistent button styling
  // Shadcn Button's 'variant' and 'size' props will handle most styling
  // We'll use 'outline' or 'ghost' variant for inactive, and custom class for active state
  const buttonVariant = (isActive: boolean) => (isActive ? 'default' : 'outline'); // Or 'ghost' for a less prominent look

  return (
    <div className="sticky top-0 z-10 flex flex-wrap gap-2 border-b p-2">
      {/* CodeBlock Button */}
      <Button
        type="button"
        variant={buttonVariant(editor.isActive('codeBlock'))}
        size="icon" // Make it an icon button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
      >
        <CodeIcon className="h-4 w-4" />
        <span className="sr-only">Code Block</span> {/* For accessibility */}
      </Button>

      {/* Link Button */}
      <Button
        type="button"
        variant={buttonVariant(editor.isActive('link'))}
        size="icon"
        onClick={setLink}
      >
        <LinkIcon className="h-4 w-4" /> {/* Using the renamed Link icon */}
        <span className="sr-only">{editor.isActive('link') ? 'Unset Link' : 'Set Link'}</span>
      </Button>

      {/* Bullet List Button */}
      <Button
        type="button"
        variant={buttonVariant(editor.isActive('bulletList'))}
        size="icon"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        disabled={!editor.can().chain().focus().toggleBulletList().run()}
      >
        <ListIcon className="h-4 w-4" />
        <span className="sr-only">Bullet List</span>
      </Button>

      {/* Ordered List Button */}
      <Button
        type="button"
        variant={buttonVariant(editor.isActive('orderedList'))}
        size="icon"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        disabled={!editor.can().chain().focus().toggleOrderedList().run()}
      >
        <ListOrderedIcon className="h-4 w-4" />
        <span className="sr-only">Ordered List</span>
      </Button>

      {/* Emoji Picker Button */}
      {/* <div className="relative">
        <Button
          type="button"
          variant={buttonVariant(showEmojiPicker)}
          size="icon"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        >
          <SmileIcon className="h-4 w-4" />
          <span className="sr-only">Emoji</span>
        </Button>
        {showEmojiPicker && (
          <div className="absolute top-full left-0 z-20 mt-1 flex w-48 flex-wrap gap-1 rounded-md border border-gray-300 bg-card p-2 shadow-lg">
            {emojis.map((emoji) => (
              <Button
                type="button"
                key={emoji}
                variant="ghost" // Use ghost variant for emoji buttons
                size="sm" // Smaller size for emoji buttons
                onClick={() => insertEmoji(emoji)}
                className="p-1 text-xl" // Override text size for emoji itself
              >
                {emoji}
              </Button>
            ))}
          </div>
        )}
      </div> */}

      {/* Undo Button */}
      <Button
        type="button"
        variant="outline" // Always outline for undo/redo
        size="icon"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        <UndoIcon className="h-4 w-4" />
        <span className="sr-only">Undo</span>
      </Button>

      {/* Redo Button */}
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        <RedoIcon className="h-4 w-4" />
        <span className="sr-only">Redo</span>
      </Button>
    </div>
  );
};
