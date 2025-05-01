import { Router } from 'express';
import { createPost } from './post.controller';

const router = Router();

router.get('/', (_, res) => {
  res.json({
    message: 'Post service is healthy and running',
  });
});

router.post('/create', createPost);

export default router;
