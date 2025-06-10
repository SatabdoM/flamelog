'use client';

import { Avatar, AvatarImage } from '@workspace/ui/components/avatar';
import { Comment } from './comment';
import { getRandomComments } from '@/data/posts/dummy-comments';
import { cn } from '@workspace/ui/lib/utils';
import { CommentInput } from './comment-input';

type CommentsSectionProps = {
  postId: number;
  commentId?: number;
};

export const CommentsSection = ({ postId, commentId }: CommentsSectionProps) => {
  const isSubCommentSection = !!commentId;

  const comments = getRandomComments();

  return (
    <div className={cn('mt-2 w-full space-y-4 pt-2', !isSubCommentSection && 'border-t p-2 pt-3')}>
      <div className="flex items-start gap-2">
        <Avatar className={cn(isSubCommentSection && 'size-6.5')}>
          <AvatarImage
            src={
              'https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=600'
            }
          />
        </Avatar>

        <CommentInput postId={postId} commentId={commentId} />
      </div>

      <div className="space-y-4">
        <h3
          className={cn(
            'text-muted-foreground font-medium',
            isSubCommentSection ? 'hidden text-sm' : 'text-[0.9rem]'
          )}
        >
          {isSubCommentSection ? 'Replies' : 'Comments'} <span>({comments.length})</span>
        </h3>

        {comments.length ? (
          <div className="space-y-5 pb-4">
            {comments.map((comment) => (
              <Comment
                key={comment.id}
                postId={postId}
                comment={comment}
                isReplyComment={isSubCommentSection}
              />
            ))}
          </div>
        ) : (
          <p className={cn('text-muted-foreground text-sm', !isSubCommentSection && 'text-center')}>
            {isSubCommentSection ? 'No replies' : 'No comments yet. Start the conversation'}
          </p>
        )}
      </div>
    </div>
  );
};
