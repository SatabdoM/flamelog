import { Request, Response } from 'express';

export async function createPost(req: Request, res: Response) {
  res.status(200).json({
    message: 'Post created successfully',
  });
}
