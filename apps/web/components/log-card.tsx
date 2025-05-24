'use client';

import { Post } from '@/types/post';
import { Avatar, AvatarFallback, AvatarImage } from '@workspace/ui/components/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@workspace/ui/components/card';

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
            <CardDescription>{log.author.email}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>{log.content}</CardContent>
      <CardFooter className="mt-2 border-t !py-2">Post actions</CardFooter>
    </Card>
  );
};
