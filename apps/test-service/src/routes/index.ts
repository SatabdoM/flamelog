import { Router } from 'express';
import authRoutes from '../modules/auth/auth.routes';
import postRoutes from '../modules/post/post.routes';

const router = Router();

router.use('/health', (_, res) => {
  res.json({
    message: 'Flamelog test service is healthy and running',
  });
});

router.use('/auth', authRoutes);
router.use('/post', postRoutes);

export default router;
