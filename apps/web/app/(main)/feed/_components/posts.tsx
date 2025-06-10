'use client';

import { useQuery } from '@tanstack/react-query';

import { getPosts } from '@/lib/actions/posts/get-posts';
import { Post } from '@/components/post';

export const Posts = () => {
  const { data: posts } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  return (
    <div className="space-y-4">{posts?.map((post) => <Post key={post.id} post={post} />)}</div>
  );
};
