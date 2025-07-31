'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const Loading = () => {
  return (
    <div className="flex w-full flex-col items-center text-center">
      <DotLottieReact src="/fire.lottie" className="size-[120px]" loop autoplay />
    </div>
  );
};
