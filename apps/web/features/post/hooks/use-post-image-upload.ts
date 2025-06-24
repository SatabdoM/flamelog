'use client';

import { useState } from 'react';

import { useUploadThing } from '@/lib/uploadthing';

interface UploadedImage {
  url: string;
  key: string;
}

export const usePostImageUpload = ({
  images,
  setImages,
}: {
  images: UploadedImage[];
  setImages: (images: UploadedImage[]) => void;
}) => {
  const [progress, setProgress] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { startUpload, isUploading } = useUploadThing('postImage', {
    onUploadProgress: (progress) => {
      setProgress(progress);
      setError(null);
    },
    onClientUploadComplete: (res) => {
      if (!res) return;
      const newImages: UploadedImage[] = res.map((r) => ({
        url: r.ufsUrl,
        key: r.key,
      }));
      setImages([...images, ...newImages]);
      setProgress(null);
      setError(null);
    },
    onUploadError: (err) => {
      console.error('Upload failed:', err);
      setError(err.message);
    },
  });

  const removeImage = (key: string) => {
    setImages(images.filter((img) => img.key !== key));
  };

  return { startUpload, isUploading, progress, error, removeImage };
};
