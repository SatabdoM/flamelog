import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { getQueryClient } from '@/lib/react-query';
import { getPosts } from '@/features/feed/actions/get-posts';
import { PostComposeTrigger } from '@/features/feed/components/post-compose-trigger';
import { FeedPosts } from '@/features/feed/components/feed-posts';

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
        <PostComposeTrigger />
        <FeedPosts />
      </div>
    </HydrationBoundary>
  );
};

export default FeedPage;
