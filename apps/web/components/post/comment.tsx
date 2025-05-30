import { formatTimeAgo } from '@/lib/utils/date';
import type { TComment } from '@/types/comment';
import { Avatar, AvatarFallback, AvatarImage } from '@workspace/ui/components/avatar';

interface CommentProps {
  comment: TComment;
}

export const Comment = ({ comment }: CommentProps) => {
  return (
    <div className="flex gap-3">
      <Avatar className="size-7">
        <AvatarImage src={comment.author?.image || ''} alt="avatar" className="object-cover" />
        <AvatarFallback>{comment.author?.name?.substring(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>

      <div className="space-y-1">
        <div className="flex items-end gap-2">
          <h4 className="text-[0.9rem]">{comment.author?.name}</h4>
          <p className="text-muted-foreground text-sm">
            {formatTimeAgo(new Date(comment.createdAt))}
          </p>
        </div>

        <p className="text-sm">{comment.message}</p>
      </div>
    </div>
  );
};
