import { z } from 'zod';

export const createPostSchema = z.object({
  title: z.string().min(5),
  content: z.string().min(20),
});

export type CreatePostSchema = z.infer<typeof createPostSchema>;
