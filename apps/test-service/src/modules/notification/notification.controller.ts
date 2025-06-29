import { Request, Response } from 'express';
import { AuthentictedRequest } from '../../types/auth';
import { NotificationService } from './notification.service';

export async function getNotifications(req: AuthentictedRequest, res: Response) {
  try {
    const userId = req?.user?.id;
    const { page, limit } = req.query;
    const notifications = await NotificationService.getNotificationsByUserId(
      userId,
      Number(page) || 1,
      Number(limit) || 10
    );
    res.status(200).json(notifications);
  } catch (error: any) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}
