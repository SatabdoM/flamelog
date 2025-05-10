'use client';

import { useUIStore } from '@/store/ui';

const FeedPage = () => {
  const isMobileSearchOpen = useUIStore((state) => state.isMobileSearchOpen);

  return (
    <div>
      <p>Feed Page</p>
      <p>Is Mobile Search: {isMobileSearchOpen ? 'true' : 'false'}</p>
    </div>
  );
};

export default FeedPage;
