'use client';

import React, { useState } from 'react';
import { Editor } from '@tiptap/react';
import {
  CodeIcon,
  LinkIcon,
  ListIcon,
  ListOrderedIcon,
  SmileIcon,
  UndoIcon,
  RedoIcon,
  BoldIcon,
} from 'lucide-react';
// import EmojiPicker, { Theme } from 'emoji-picker-react';

import { ButtonWithTooltip } from '@workspace/ui/components/button-with-tooltip';
import { cn } from '@workspace/ui/lib/utils';

interface ToolbarProps {
  editor: Editor | null;
  className?: string;
}

export const Toolbar = ({ editor, className }: ToolbarProps) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

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

  const insertEmoji = (emoji: string) => {
    editor.chain().focus().insertContent(emoji).run();
    setShowEmojiPicker(false);
  };

  // Helper for consistent button styling
  const buttonVariant = (isActive: boolean) => (isActive ? 'editor-tool' : 'editor-tool-inactive');

  return (
    <div
      className={cn(
        'sticky top-0 z-10 flex h-[42px] flex-wrap items-center gap-1 rounded-t-md border px-2',
        className
      )}
    >
      {/* Bold Button */}
      <ButtonWithTooltip
        type="button"
        variant={buttonVariant(editor.isActive('bold'))}
        size="xs" // Make it an icon button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        tooltip="Bold"
        tooltipDelayDuration={0}
      >
        <BoldIcon className="size-4" />
        <span className="sr-only">Bold</span> {/* For accessibility */}
      </ButtonWithTooltip>

      {/* CodeBlock Button */}
      <ButtonWithTooltip
        type="button"
        variant={buttonVariant(editor.isActive('codeBlock'))}
        size="xs" // Make it an icon button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
        tooltip="Code"
        tooltipDelayDuration={0}
      >
        <CodeIcon className="size-4" />
        <span className="sr-only">Code Block</span> {/* For accessibility */}
      </ButtonWithTooltip>

      {/* Link Button */}
      <ButtonWithTooltip
        type="button"
        variant={buttonVariant(editor.isActive('link'))}
        size="xs"
        onClick={setLink}
        tooltip="Link"
        tooltipDelayDuration={0}
      >
        <LinkIcon className="size-4" /> {/* Using the renamed Link icon */}
        <span className="sr-only">{editor.isActive('link') ? 'Unset Link' : 'Set Link'}</span>
      </ButtonWithTooltip>

      {/* Bullet List Button */}
      <ButtonWithTooltip
        type="button"
        variant={buttonVariant(editor.isActive('bulletList'))}
        size="xs"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        disabled={!editor.can().chain().focus().toggleBulletList().run()}
        tooltip="Bullet list"
        tooltipDelayDuration={0}
      >
        <ListIcon className="size-4" />
        <span className="sr-only">Bullet List</span>
      </ButtonWithTooltip>

      {/* Ordered List Button */}
      <ButtonWithTooltip
        type="button"
        variant={buttonVariant(editor.isActive('orderedList'))}
        size="xs"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        disabled={!editor.can().chain().focus().toggleOrderedList().run()}
        tooltip="Numbered List"
        tooltipDelayDuration={0}
      >
        <ListOrderedIcon className="size-4" />
        <span className="sr-only">Ordered List</span>
      </ButtonWithTooltip>

      {/* Emoji Picker Button */}
      {/* <div className="relative">
        <ButtonWithTooltip
          type="button"
          variant={buttonVariant(showEmojiPicker)}
          size="xs"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          tooltip="Emoji"
          tooltipDelayDuration={0}
        >
          <SmileIcon className="size-4" />
          <span className="sr-only">Emoji</span>
        </ButtonWithTooltip>

        {showEmojiPicker && (
          <div className="absolute top-full left-0 z-20 mt-1 shadow-lg">
            <EmojiPicker theme={Theme.DARK} onEmojiClick={(emoji) => insertEmoji(emoji.emoji)} />
          </div>
        )}
      </div> */}

      {/* Undo Button */}
      <ButtonWithTooltip
        type="button"
        variant="outline"
        size="xs"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className="ml-auto"
        tooltip="Undo"
        tooltipDelayDuration={0}
      >
        <UndoIcon className="size-4" />
        <span className="sr-only">Undo</span>
      </ButtonWithTooltip>

      {/* Redo Button */}
      <ButtonWithTooltip
        type="button"
        variant="outline"
        size="xs"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        tooltip="Redo"
        tooltipDelayDuration={0}
      >
        <RedoIcon className="size-4" />
        <span className="sr-only">Redo</span>
      </ButtonWithTooltip>
    </div>
  );
};
