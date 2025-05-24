import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { getQueryClient } from '@/lib/react-query';
import { LogComposeTrigger } from './_components/log-compose-trigger';
import { getPosts } from './get-posts';
import { Posts } from './_components/posts';

const FeedPage = async () => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="space-y-6">
        <LogComposeTrigger />

        <Posts />
      </div>
    </HydrationBoundary>
  );
};

export default FeedPage;
