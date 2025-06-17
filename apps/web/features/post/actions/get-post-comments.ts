'use server';

import { getRandomComments } from '@/data/posts/dummy-comments';
import { sleep } from '@/lib/utils';

export const getPostComments = async (postId: string, pageNo?: string) => {
  await sleep(2000);

  const comments = getRandomComments();
  return comments;
};
