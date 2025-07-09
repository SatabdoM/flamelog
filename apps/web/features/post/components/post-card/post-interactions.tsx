'use client';

import { useState } from 'react';
import { Bookmark, MessageCircleMore, Share2, ThumbsUp } from 'lucide-react';

import { Button } from '@workspace/ui/components/button';
import { CommentsSection } from './comment-section';

interface PostInteractionsProps {
  postId: number;
  likeCount: number;
  commentCount: number;
}

export const PostInteractions = ({ postId, likeCount, commentCount }: PostInteractionsProps) => {
  const [isCommentSectionOpen, setIsCommentSectionOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="flex w-full items-center">
        <Button variant="ghost" size="sm" className="h-9 w-full max-w-20 rounded-lg">
          <ThumbsUp className="size-4.5" />
          <span className="ml-0.5">{likeCount}</span>
          <span className="hidden">Like</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="h-9 w-full max-w-20 rounded-lg"
          onClick={() => setIsCommentSectionOpen((prev) => !prev)}
        >
          <MessageCircleMore className="size-4.5" />
          <span className="ml-0.5">{commentCount}</span>
          <span className="hidden">Comments</span>
        </Button>

        <Button variant="ghost" size="sm" className="h-9 w-full max-w-20 rounded-lg">
          <Share2 className="size-4.5" />
          <span className="hidden">Share</span>
        </Button>

        <Button variant="ghost" size="sm" className="-mr-1.5 ml-auto rounded-lg">
          <Bookmark className="size-4.5" />
          <span className="hidden">Save</span>
        </Button>
      </div>

      {isCommentSectionOpen && <CommentsSection postId={postId} />}
    </div>
  );
};
