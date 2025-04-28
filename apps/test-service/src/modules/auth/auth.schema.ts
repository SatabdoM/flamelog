import { z } from 'zod';

export const signupSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3),
  password: z.string().min(6),
  name: z.string().optional(),
});
export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});
export type signupSchema = z.infer<typeof signupSchema>;
export type loginSchema = z.infer<typeof loginSchema>;
