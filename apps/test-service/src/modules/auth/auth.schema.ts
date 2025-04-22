import { z } from 'zod';

export const signUpSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3),
  password: z.string().min(6),
  name: z.string().optional(),
});
export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});
export type SignUpSchema = z.infer<typeof signUpSchema>;
export type LogInSchema = z.infer<typeof loginSchema>;
