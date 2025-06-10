'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, ThumbsDown, ThumbsUp } from 'lucide-react';

import { formatTimeAgo } from '@/lib/utils/date';
import type { TComment } from '@/types/comment';
import { Avatar, AvatarFallback, AvatarImage } from '@workspace/ui/components/avatar';
import { Button } from '@workspace/ui/components/button';
import { CommentsSection } from './comment-section';
import { cn } from '@workspace/ui/lib/utils';

interface CommentProps {
  postId: number;
  comment: TComment;
  isReplyComment?: boolean;
}

export const Comment = ({ postId, comment, isReplyComment = false }: CommentProps) => {
  const [isSubCommentSectionOpen, setIsSubCommentSectionOpen] = useState(false);

  return (
    <div className="flex gap-3">
      <Avatar className={cn(isReplyComment && 'size-6.5')}>
        <AvatarImage src={comment.author?.image || ''} alt="avatar" className="object-cover" />
        <AvatarFallback>{comment.author?.name?.substring(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>

      <div className="w-full space-y-0.5">
        <div className="flex items-center gap-2">
          <h4 className="text-sm font-semibold">{comment.author?.name}</h4>
          <p className="text-muted-foreground text-xs">
            {formatTimeAgo(new Date(comment.createdAt))}
          </p>
        </div>

        <p className="text-sm">{comment.message}</p>

        <div className="!mt-1 flex items-center gap-1">
          <Button variant="ghost" size="icon" className="text-muted-foreground size-7">
            <ThumbsUp className="size-4" />
          </Button>

          <Button variant="ghost" size="icon" className="text-muted-foreground size-7">
            <ThumbsDown className="size-4" />
          </Button>

          {!isReplyComment && (
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground h-6.5 text-xs font-medium"
              onClick={() => setIsSubCommentSectionOpen((prev) => !prev)}
            >
              Reply
              {isSubCommentSectionOpen ? (
                <ChevronUp className="text-muted-foreground -mr-0.5 size-3" />
              ) : (
                <ChevronDown className="text-muted-foreground -mr-0.5 size-3" />
              )}
            </Button>
          )}
        </div>

        {isSubCommentSectionOpen && <CommentsSection postId={postId} commentId={2} />}
      </div>
    </div>
  );
};
