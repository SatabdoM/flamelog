'use client';

import { toast } from 'sonner';
import { Ellipsis, FileWarning, MinusCircle } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@workspace/ui/components/dropdown-menu';

interface PostOptionsProps {
  postId: number;
}

export const PostOptions = ({ postId }: PostOptionsProps) => {
  const reportPost = () => {
    toast.info('Post reported!');
  };

  const markPostAsNotInterested = () => {
    toast.info('Got it, we will not show this type of posts to you');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-muted-foreground hover:bg-accent mb-auto ml-auto cursor-pointer rounded-md p-1">
        <Ellipsis className="size-4" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="bg-background">
        <DropdownMenuItem className="cursor-pointer" onClick={markPostAsNotInterested}>
          <MinusCircle className="size-4" />
          Not Interested
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={reportPost}>
          <FileWarning className="size-4" />
          Report
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
