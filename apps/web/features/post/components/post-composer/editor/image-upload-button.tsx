'use client';

import { useRef } from 'react';
import { ImageIcon } from 'lucide-react';

import { Button } from '@workspace/ui/components/button';
import { ClientUploadedFileData } from 'uploadthing/types';
import { cn } from '@workspace/ui/lib/utils';

interface ImageUploadButtonProps {
  startUpload: (
    files: File[],
    input?: undefined
  ) => Promise<
    | ClientUploadedFileData<{
        uploadedBy: number;
        fileUrl: string;
      }>[]
    | undefined
  >;
  disabled?: boolean;
  isUploading?: boolean;
  className?: string;
}

export const ImageUploadButton = ({
  startUpload,
  isUploading,
  className,
  disabled,
}: ImageUploadButtonProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickUpload = () => {
    inputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    await startUpload(files);
    e.target.value = ''; // Reset so user can re-upload same file
  };

  return (
    <>
      {/* Hidden input */}
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleFileChange}
        multiple
        className="hidden"
      />

      {/* Upload Button */}
      <Button
        type="button"
        variant="secondary"
        disabled={disabled ?? isUploading}
        onClick={handleClickUpload}
        className={cn(className)}
      >
        <ImageIcon />
        Add Images
      </Button>
    </>
  );
};
