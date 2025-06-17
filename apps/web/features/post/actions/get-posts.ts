'use server';

import { generateDummyPosts } from '@/data/posts/dummy-posts';
import { api } from '@/lib/axios';
import { sleep } from '@/lib/utils';
import { TPost } from '@/types/post';

export const getPosts = async () => {
  // const res = await api.get<{ posts: Post[] }>(`/post/user`);

  // const { posts } = res.data;

  await sleep(2000);
  const posts = generateDummyPosts(20);
  return posts;
};
