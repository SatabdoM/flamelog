'use client';

import { useAuthStore } from '@/store/auth';

const FeedPage = () => {
  const authState = useAuthStore();
  console.log(authState);
  return <div>FeedPage</div>;
};

export default FeedPage;
