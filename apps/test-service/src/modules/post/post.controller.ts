import { Request, Response } from 'express';
import { AuthentictedRequest } from '../../types/auth';
import * as PostService from './post.service';

export async function createPost(req: AuthentictedRequest, res: Response) {
  try {
    console.log('Creating post with data:', req.body);
    const post = await PostService.createPost(req);
    res.status(201).json({ post });
  } catch (error: any) {
    console.error('Error creating post:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}
//getPostsByUserId, deletePostById, editPostById
export async function getPostsByUserId(req: AuthentictedRequest, res: Response) {
  try {
    const posts = await PostService.getPostsByUserId(req);
    res.status(200).json({ posts });
  } catch (error: any) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}
export async function deletePostById(req: AuthentictedRequest, res: Response) {
  try {
    const post = await PostService.deletePostById(req);
    res.status(200).json({ post });
  } catch (error: any) {
    console.error('Error deleting post:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}
export async function editPostById(req: AuthentictedRequest, res: Response) {
  try {
    const post = await PostService.editPostById(req);
    res.status(200).json({ post });
  } catch (error: any) {
    console.error('Error editing post:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}
