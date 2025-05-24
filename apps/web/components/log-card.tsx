'use client';

import { BookMarked, MessageCircleMore, Share2 } from 'lucide-react';

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

interface LogCardProps {
  log: Post;
}

export const LogCard = ({ log }: LogCardProps) => {
  return (
    <Card className="gap-2 pb-0">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={log.author.image || ''} alt="avatar" />
            <AvatarFallback>{log.author.name?.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>

          <div>
            <CardTitle>{log.author.name}</CardTitle>
            <CardDescription className="mt-0.5">{formatTimeAgo(log.createdAt)}</CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="text-pretty">{log.content}</CardContent>

      <CardFooter className="mt-2 flex w-full items-center justify-between border-t px-1.5 !py-1.5">
        <Button variant="ghost" size="sm" className="h-9 flex-1 rounded-lg">
          <span>🔥</span>
          <span className="text-primary -ml-1">{log.likeCount}</span>
          <span className="hidden md:flex">Like</span>
        </Button>

        <Button variant="ghost" size="sm" className="h-9 flex-1 rounded-lg">
          <MessageCircleMore className="size-4.5" />
          <span className="-ml-1">{log.commentCount}</span>
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
      </CardFooter>
    </Card>
  );
};
