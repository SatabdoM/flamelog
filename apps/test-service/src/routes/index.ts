import { Router } from 'express';
import authRoutes from '../modules/auth/auth.routes';

const router = Router();

router.use('/health', (_, res) => {
  res.json({
    message: ' Flamelog test service is healthy and running!',
  });
});
router.use('/auth', authRoutes);

export default router;
