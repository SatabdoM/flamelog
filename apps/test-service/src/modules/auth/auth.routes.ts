import { Router } from 'express';
import { signup, login, getMe } from './auth.controller';
import { signupSchema, loginSchema } from './auth.schema';
import { validate } from '../../middleware/validate';
import { requireAuth } from '../../middleware/auth.middleware';

const router = Router();

router.post('/signup', validate({ body: signupSchema }), signup);
router.post('/login', validate({ body: loginSchema }), login);
router.get('/me', requireAuth, getMe);

export default router;
