'use client';

import { Post } from '@/features/post/components';
import { getPosts } from '@/features/feed/actions/get-posts';
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
    <div className="space-y-4">{posts?.map((post) => <Post key={post.id} post={post} />)}</div>
  );
};

export default MyLogsPage;
