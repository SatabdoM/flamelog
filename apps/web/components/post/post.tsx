'use client';

import { TPost } from '@/types/post';
import { Avatar, AvatarFallback, AvatarImage } from '@workspace/ui/components/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@workspace/ui/components/card';
import { formatTimeAgo } from '@/lib/utils/date';
import { PostInteractions } from './post-interactions';

interface PostProps {
  post: TPost;
}

export const Post = ({ post }: PostProps) => {
  return (
    <Card className="gap-2 pb-0">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Avatar className="size-9">
            <AvatarImage src={post.author?.image || ''} alt="avatar" className="object-cover" />
            <AvatarFallback>{post.author?.name?.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>

          <div>
            <CardTitle className="text-base">{post.author?.name}</CardTitle>
            <CardDescription className="-mt-0.5">
              {formatTimeAgo(new Date(post.createdAt))}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="text-[0.95rem] text-pretty">{post.content}</CardContent>

      <CardFooter className="mt-2 w-full flex-col border-t px-1.5 !py-1.5">
        <PostInteractions
          postId={post.id}
          likeCount={post.likeCount}
          commentCount={post.commentCount}
        />
      </CardFooter>
    </Card>
  );
};
