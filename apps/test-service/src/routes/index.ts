import { Router } from 'express';
import authRoutes from '../modules/auth/auth.routes';
import postRoutes from '../modules/post/post.routes';
import { sseHandler } from '../utils/sse/sse';

const router = Router();

router.use('/health', (_, res) => {
  res.json({
    message: 'Flamelog test service is healthy and running',
  });
});

router.use('/auth', authRoutes);
router.use('/post', postRoutes);

router.get('/events', sseHandler);

export default router;
