import { PrismaClient } from '@prisma/client';
import { NotificationType } from 'packages/database/src';
import { CreateNotificationSchema } from './notification.schema';

const prisma = new PrismaClient();
export class NotificationService {
  static async createNotification(data: CreateNotificationSchema) {
    const notification = await prisma.notification.create({ data });
    return notification;
  }
  static async sendNotification(data: CreateNotificationSchema) {
    return this.createNotification(data);
  }
  static async getNotificationsByUserId(userId: number, page = 1, limit = 10) {
    const skip = (page - 1) * limit;

    const [notifications, total] = await prisma.$transaction([
      prisma.notification.findMany({
        where: { recipientId: userId },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.notification.count({ where: { recipientId: userId } }),
    ]);
    return { notifications, total };
  }
  static async markAsRead(notificationId: number) {
    const notification = await prisma.notification.update({
      where: { id: notificationId },
      data: { read: true },
    });
    return notification;
  }
  static async markAllAsRead(userId: number) {
    const notifications = await prisma.notification.updateMany({
      where: { recipientId: userId, read: false },
      data: { read: true },
    });
    return notifications;
  }
  static async deleteNotification(notificationId: number) {
    const notification = await prisma.notification.delete({
      where: { id: notificationId },
    });
    return notification;
  }
}

// model Notification {
//   id          Int  @id @default(autoincrement())
//   recipient   User @relation("UserNotifications", fields: [recipientId], references: [id])
//   recipientId Int

//   sender   User? @relation("SenderNotifications", fields: [senderId], references: [id])
//   senderId Int?

//   type    NotificationType
//   message String
//   link    String? // Optional link (e.g., to post, comment, profile)
//   read    Boolean          @default(false)

//   createdAt DateTime @default(now())
// }
