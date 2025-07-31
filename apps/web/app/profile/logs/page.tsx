'use client';

import { useQuery } from '@tanstack/react-query';

import { PostCard } from '@/features/post/components/post-card';
import { getPosts } from '@/features/feed/actions/get-posts';
import { Loading } from '@/components/loading';

const MyLogsPage = () => {
  const { isPending, data: posts } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  if (isPending) {
    return (
      <div className="text-center">
        <Loading />
        <p>Loading posts...</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">{posts?.map((post) => <PostCard key={post.id} post={post} />)}</div>
  );
};

export default MyLogsPage;
