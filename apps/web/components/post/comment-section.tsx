'use client';

import { Send } from 'lucide-react';

import { Button } from '@workspace/ui/components/button';
import { Input } from '@workspace/ui/components/input';
import { Avatar, AvatarImage } from '@workspace/ui/components/avatar';
import { Comment } from './comment';
import { useEffect, useRef } from 'react';
import { getRandomComments } from '@/data/posts/dummy-comments';

interface CommentsSection {
  postId: number;
}

export const CommentsSection = ({ postId }: CommentsSection) => {
  const comments = getRandomComments();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <div className="mt-2 w-full space-y-4 border-t p-2 pt-3">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage
            src={
              'https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=600'
            }
          />
        </Avatar>
        <Input ref={inputRef} placeholder="What do you think about the post?" />
        <Button variant="secondary" size="icon">
          <Send />
        </Button>
      </div>

      <div className="space-y-4">
        <h3 className="text-muted-foreground font-medium">
          Comments <span>({comments.length})</span>
        </h3>

        {comments.length ? (
          <div className="space-y-5 pb-4">
            {comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-center text-sm">
            No comments yet. Start the conversation
          </p>
        )}
      </div>
    </div>
  );
};
