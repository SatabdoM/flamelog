import { z } from 'zod';

export const PostComposeSchema = z.object({
  content: z.string().min(1, {
    message: 'Content is required',
  }),
  images: z.array(
    z.object({
      key: z.string(),
      url: z.string(),
    })
  ),
});

export type PostComposeSchema = z.infer<typeof PostComposeSchema>;
