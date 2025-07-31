'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ExplorePage = () => {
  return (
    <div className="mt-20 flex w-full flex-col items-center text-center">
      <DotLottieReact src="/fire.lottie" className="size-[120px]" loop autoplay />
    </div>
  );
};

export default ExplorePage;
