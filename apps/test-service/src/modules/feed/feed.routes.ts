import { Router } from 'express';
import { requireAuth } from '../../middleware/auth.middleware';
import { getUserFeed } from './feed.controller';

const router = Router();
router.get('/', requireAuth, getUserFeed);
export default router;
