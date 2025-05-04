import { Router } from 'express';
import { createPost, getPostsByUserId, deletePostById, editPostById } from './post.controller';
import { requireAuth } from '../../middleware/auth.middleware';
import { validate } from '../../middleware/validate';

const router = Router();

router.get('/', (_, res) => {
  res.json({
    message: 'Post service is healthy and running',
  });
});

//route-->middleware-->controller-->service--->db
router.post('/create', requireAuth, createPost);
router.get('/user', requireAuth, getPostsByUserId);
router.post('/:id', requireAuth, deletePostById);
router.post('/:id', requireAuth, editPostById);

export default router;
