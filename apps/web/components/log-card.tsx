'use client';

import { BookMarked, MessageCircleMore, Send, Share2 } from 'lucide-react';

import { Post } from '@/types/post';
import { Avatar, AvatarFallback, AvatarImage } from '@workspace/ui/components/avatar';
import { Button } from '@workspace/ui/components/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@workspace/ui/components/card';
import { formatTimeAgo } from '@/lib/utils/date';
import { useEffect, useRef, useState } from 'react';
import { Input } from '@workspace/ui/components/input';
import { Comment } from './post/comment';
import { CommentsSection } from './post/comment-section';

interface LogCardProps {
  log: Post;
}

export const LogCard = ({ log }: LogCardProps) => {
  const [isCommentSectionOpen, setIsCommentSectionOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isCommentSectionOpen) {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [isCommentSectionOpen]);

  return (
    <Card className="gap-2 pb-0">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={log.author?.image || ''} alt="avatar" className="object-cover" />
            <AvatarFallback>{log.author?.name?.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>

          <div>
            <CardTitle>{log.author?.name}</CardTitle>
            <CardDescription className="mt-0.5">
              {formatTimeAgo(new Date(log.createdAt))}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="text-pretty">{log.content}</CardContent>

      <CardFooter className="mt-2 w-full flex-col border-t px-1.5 !py-1.5">
        <div className="flex w-full items-center justify-between">
          <Button variant="ghost" size="sm" className="h-9 flex-1 rounded-lg">
            <span>🔥</span>
            <span className="text-primary -ml-1">{log.likeCount}</span>
            <span className="hidden md:flex">Like</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="h-9 flex-1 rounded-lg"
            onClick={() => setIsCommentSectionOpen((prev) => !prev)}
          >
            <MessageCircleMore className="size-4.5" />
            <span className="-ml-0.5">{log.commentCount}</span>
            <span className="hidden md:flex">Comment</span>
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

        {/* Comments section */}
        {isCommentSectionOpen && <CommentsSection postId={log.id} />}
      </CardFooter>
    </Card>
  );
};
