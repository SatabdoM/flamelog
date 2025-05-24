'use client';

import { useQuery } from '@tanstack/react-query';

import { getPosts } from '@/lib/actions/posts/get-posts';
import { LogCard } from '@/components/log-card';

export const Posts = () => {
  const { data: posts } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  return (
    <div className="space-y-4">{posts?.map((post) => <LogCard key={post.id} log={post} />)}</div>
  );
};
