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
import { PostOptions } from './post-options';
import { PostInteractions } from './post-interactions';

interface PostCardProps {
  post: TPost;
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <Card className="group/post-card gap-3 pb-0">
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

          <PostOptions postId={post.id} />
        </div>
      </CardHeader>

      <CardContent className="text-[0.95rem] text-pretty">{post.content}</CardContent>

      <CardFooter className="mt-1 border-t !py-1.5">
        <PostInteractions
          postId={post.id}
          likeCount={post.likeCount}
          commentCount={post.commentCount}
        />
      </CardFooter>
    </Card>
  );
};
