'use client';

import { Ellipsis, FileWarning, MinusCircle, Share2 } from 'lucide-react';

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
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-muted-foreground hover:bg-accent mb-auto ml-auto cursor-pointer rounded-md p-1">
        <Ellipsis className="size-4" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="bg-background">
        <DropdownMenuItem className="cursor-pointer">
          <MinusCircle className="size-4" />
          Not Interested
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <FileWarning className="size-4" />
          Report
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Share2 className="size-4" />
          Share
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
