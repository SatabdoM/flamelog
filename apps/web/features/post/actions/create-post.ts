'use server';

import { api } from '@/lib/axios';
import { PostComposeSchema } from '../schemas/post-compose-schema';

export const createPost = async (values: PostComposeSchema) => {
  try {
    const validation = PostComposeSchema.safeParse(values);

    if (!validation.success) {
      return {
        error: {
          message: 'Content is missing!',
          code: 400,
        },
      };
    }

    const res = await api.post('/post/create', { ...values, title: 'Test' });
    const post = res.data.post;

    console.log({ post });

    return { post };
  } catch (error) {
    console.error('CREATE_POST_ERROR: ', error);

    return {
      error: {
        message: 'Something went wrong',
        code: 500,
      },
    };
  }
};
