import { z } from 'zod';

export const gptResponseSchema = z.object({
  isValid: z.boolean(),
  tags: z.array(z.string()).optional(),
  rationale: z.string(),
});
export type GptResponseSchema = z.infer<typeof gptResponseSchema>;
