'use client';

import { useQuery } from '@tanstack/react-query';

import { getPosts } from '@/features/feed/actions/get-posts';
import { PostCard } from '@/features/post/components/post-card';

export const FeedPosts = () => {
  const { data: posts } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  return (
    <div className="space-y-4">{posts?.map((post) => <PostCard key={post.id} post={post} />)}</div>
  );
};
