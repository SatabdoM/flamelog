'use client';

import { LogCard } from '@/components/log-card';
import { getPosts } from '@/lib/actions/posts/get-posts';
import { useQuery } from '@tanstack/react-query';

const MyLogsPage = () => {
  const { isPending, data: posts } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  if (isPending) {
    return (
      <div>
        <p>Loading posts...</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">{posts?.map((post) => <LogCard key={post.id} log={post} />)}</div>
  );
};

export default MyLogsPage;
