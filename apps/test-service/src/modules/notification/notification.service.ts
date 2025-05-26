import { PrismaClient } from '@prisma/client';
import { NotificationType } from 'packages/database/src';
import { CreateNotificationSchema } from './notification.schema';

const prisma = new PrismaClient();

export const createNotification = async (data: CreateNotificationSchema) => {
  const notification = await prisma.notification.create({
    data: {
      ...data,
      //   type: NotificationType[data.type],
    },
  });
  return notification;
};
