import { Router } from 'express';
import { signup, login, getMe, adminAccess, refresh, logout } from './auth.controller';
import { signupSchema, loginSchema } from './auth.schema';
import { validate } from '../../middleware/validate';
import { requireAuth, requireAdmin } from '../../middleware/auth.middleware';

const router = Router();

router.post('/signup', validate({ body: signupSchema }), signup);
router.post('/login', validate({ body: loginSchema }), login);
router.post('/logout', logout);
router.post('/refresh', refresh);
router.get('/me', requireAuth, getMe);
router.get('/admin', requireAuth, requireAdmin, adminAccess);

export default router;
