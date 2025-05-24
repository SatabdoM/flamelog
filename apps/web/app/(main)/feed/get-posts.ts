'use server';

import { api } from '@/lib/axios';
import { Post } from '@/types/post';

export const getPosts = async () => {
  const res = await api.get<{ posts: Post[] }>(`/post/user`);

  const { posts } = res.data;
  return posts;
};
