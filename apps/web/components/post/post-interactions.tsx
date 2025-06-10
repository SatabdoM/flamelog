'use client';

import { useState } from 'react';
import { BookMarked, MessageCircleMore, Share2 } from 'lucide-react';

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
    <>
      <div className="flex w-full items-center justify-between">
        <Button variant="ghost" size="sm" className="h-9 flex-1 rounded-lg">
          <span>🔥</span>
          <span className="text-primary -ml-1">{likeCount}</span>
          <span className="hidden md:flex">Like</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="h-9 flex-1 rounded-lg"
          onClick={() => setIsCommentSectionOpen((prev) => !prev)}
        >
          <MessageCircleMore className="size-4.5" />
          <span className="-ml-0.5">{commentCount}</span>
          <span className="hidden md:flex">Comments</span>
        </Button>

        <Button variant="ghost" size="sm" className="h-9 flex-1 rounded-lg">
          <Share2 className="size-4.5" />
          <span className="hidden md:flex">Share</span>
        </Button>

        <Button variant="ghost" size="sm" className="h-9 flex-1 rounded-lg">
          <BookMarked className="size-4.5" />
          <span className="hidden md:flex">Save</span>
        </Button>
      </div>

      {isCommentSectionOpen && <CommentsSection postId={postId} />}
    </>
  );
};
