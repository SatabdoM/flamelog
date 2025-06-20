import { z } from 'zod';

export const LogSchema = z.object({
  content: z.string(),
});

export type LogSchema = z.infer<typeof LogSchema>;
