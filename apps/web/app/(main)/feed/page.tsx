import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { getQueryClient } from '@/lib/react-query';
import { getPosts } from '@/lib/actions/posts/get-posts';
import { LogComposeTrigger } from './_components/log-compose-trigger';
import { Posts } from './_components/posts';

const FeedPage = async () => {
  const queryClient = getQueryClient();

  // Prefetching the initial query so that it will be avialable to the client as cached data, even before rendering, as we are dehydrating the client with this particular query client.
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
