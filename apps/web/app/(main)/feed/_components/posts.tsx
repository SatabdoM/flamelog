'use client';

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getPosts } from '../get-posts';

export const Posts = () => {
  const { data: posts } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  return (
    <div>
      {posts?.map((post) => (
        <p key={post.id} className="border-b py-2">
          <span>{post.title}</span>
          <br />
          <span>{post.content}</span>
        </p>
      ))}
    </div>
  );
};
