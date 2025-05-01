import { Router } from 'express';
import { signup, login, getMe, adminAccess } from './auth.controller';
import { signupSchema, loginSchema } from './auth.schema';
import { validate } from '../../middleware/validate';
import { requireAuth, requireAdmin } from '../../middleware/auth.middleware';

const router = Router();

router.post('/signup', validate({ body: signupSchema }), signup);
router.post('/login', validate({ body: loginSchema }), login);
router.get('/me', requireAuth, getMe);
router.get('/admin', requireAuth, requireAdmin, adminAccess);

export default router;
