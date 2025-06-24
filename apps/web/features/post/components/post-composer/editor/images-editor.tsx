'use client';

import Image from 'next/image';
import { X } from 'lucide-react';

import { cn } from '@workspace/ui/lib/utils';
import { ButtonWithTooltip } from '@workspace/ui/components/button-with-tooltip';
import { Progress } from '@workspace/ui/components/progress';
import { UploadedImage } from '@/features/post/types';

interface PostImagesEditorProps {
  images: UploadedImage[];
  removeImage: (key: string) => void;
  isUploading?: boolean;
  progress?: number | null;
}

export const PostImagesEditor = ({
  images,
  removeImage,
  isUploading,
  progress,
}: PostImagesEditorProps) => {
  console.log({ images });
  return (
    <div className="max-h-48 space-y-3 overflow-y-auto">
      {progress ? (
        <div className="bg-accent space-y-2 rounded-md p-4 pt-2">
          <p className="text-muted-foreground text-sm">Uploading images: {progress}%</p>
          <Progress value={progress} />
        </div>
      ) : isUploading ? (
        <div className="bg-accent rounded-md p-4 py-2">
          <p className="text-muted-foreground text-sm">Uploading images...</p>
        </div>
      ) : null}

      {/* Images Grid */}
      {images.length > 0 && (
        <div className="grid grid-cols-3 gap-2">
          {images.map((img) => (
            <div key={img.key} className="group relative">
              <Image
                src={img.url}
                alt={`Post Image - ${img.key}`}
                width={300}
                height={300}
                className="h-32 w-full rounded-md object-cover"
              />

              {/* Delete Button */}
              <ButtonWithTooltip
                type="button"
                onClick={() => removeImage(img.key)}
                variant="destructive"
                size="xs"
                className={cn(
                  'absolute top-1 right-1 size-6 opacity-0 transition-opacity group-hover:opacity-100'
                )}
                tooltip="Delete"
                tooltipDelayDuration={0}
              >
                <X />
              </ButtonWithTooltip>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
