import { z } from 'zod';
import { prisma, Prisma } from '@workspace/db';

export const createPostSchema = z.object({
  title: z.string().min(5),
  content: z.string().min(20),
});

export type CreatePostSchema = z.infer<typeof createPostSchema>;

export const PostSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
  createdAt: z.string().datetime(),
  authorId: z.number(),
  likeCount: z.number(),
  commentCount: z.number(),
});
export type PostSchema = z.infer<typeof PostSchema>;

const postWithAllRelations = Prisma.validator<Prisma.PostDefaultArgs>()({
  include: {
    author: true,
    tags: { include: { tag: true } }, // includes the actual Tag object
    comments: true,
    likes: true,
    shares: true,
    feed: true,
  },
});

export type PostWithAllRelations = Prisma.PostGetPayload<typeof postWithAllRelations>;
