import { Router } from 'express';
import authRoutes from '../modules/auth/auth.routes';
import postRoutes from '../modules/post/post.routes';
import feedRoutes from '../modules/feed/feed.routes';
import notificationRoutes from '../modules/notification/notification.routes';
import { sseHandler } from '../utils/sse/sse';

const router = Router();

router.use('/health', (_, res) => {
  res.json({
    message: 'Flamelog test service is healthy and running',
  });
});

router.use('/auth', authRoutes);
router.use('/post', postRoutes);
router.use('/feed', feedRoutes);
router.get('/events', sseHandler);
router.use('/notification', notificationRoutes);

export default router;
