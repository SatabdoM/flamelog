import { Router } from 'express';
import { requireAuth } from '../../middleware/auth.middleware';
import { getNotifications } from './notification.controller';

const router = Router();

router.get('/', requireAuth, getNotifications);

export default router;
