import { z } from 'zod';
import { NotificationType } from 'packages/database/src';

export const createNotificationSchema = z.object({
  id: z.number(),
  senderId: z.number(),
  recipientId: z.number(),
  type: z.nativeEnum(NotificationType),
  message: z.string(),
  link: z.string().url().optional(),
  read: z.boolean().default(false),
  createdAt: z.date().default(() => new Date()),
});
export const markAsReadSchema = z.object({
  notificationId: z.number(),
});
export const paginationSchema = z.object({
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(10),
});
export type CreateNotificationSchema = z.infer<typeof createNotificationSchema>;
export type MarkAsReadSchema = z.infer<typeof markAsReadSchema>;
export type PaginationSchema = z.infer<typeof paginationSchema>;
