'use client';

import { useQuery } from '@tanstack/react-query';

import { getPosts } from '@/features/post/actions/get-posts';
import { Post } from '@/features/post/components';

export const Posts = () => {
  const { data: posts } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  return (
    <div className="space-y-4">{posts?.map((post) => <Post key={post.id} post={post} />)}</div>
  );
};
