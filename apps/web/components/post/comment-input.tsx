'use client';

import { useEffect, useRef, useState } from 'react';

import { Button } from '@workspace/ui/components/button';
import { Textarea } from '@workspace/ui/components/textarea';

interface CommentInputProps {
  postId: number;
  commentId?: number;
}

export const CommentInput = ({ postId, commentId }: CommentInputProps) => {
  const isSubCommentSection = !!commentId;
  const [showCommentOption, setShowCommentOption] = useState(false);

  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const handleInput = () => {
      setShowCommentOption(!!inputRef.current?.value);
    };

    const inputEl = inputRef.current;

    // Event listeners to show/hide the comment buttons
    inputEl?.addEventListener('input', handleInput);

    // Focus whenever we open the comment section for the first time
    if (inputEl) {
      inputEl.focus();
    }

    return () => {
      inputEl?.removeEventListener('input', handleInput);
    };
  }, [inputRef]);

  return (
    <div className="w-full space-y-1.5">
      <Textarea
        ref={inputRef}
        placeholder={
          isSubCommentSection ? 'Reply to the comment' : 'What do you think about the post?'
        }
        className="text-sm"
      />

      {showCommentOption && (
        <div className="flex items-center justify-end gap-1">
          <Button variant="secondary" size="sm">
            {isSubCommentSection ? 'Reply' : 'Comment'}
          </Button>
        </div>
      )}
    </div>
  );
};
