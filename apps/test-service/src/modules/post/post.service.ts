import { prisma } from '@workspace/db';
import { AuthentictedRequest } from '../../types/auth';

export async function createPost(req: AuthentictedRequest) {
  console.log('Creating post with data:', req.body);
  const { title, content } = req.body;
  const post = await prisma.post.create({
    data: {
      title,
      content,
      authorId: req.user.id,
    },
  });
  //TODO: add tags to post and metadata
  if (!post) {
    throw new Error('Post creation failed');
  }
  return post;
}
//get all posts
export async function getPostsByUserId(req: AuthentictedRequest) {
  const posts = await prisma.post.findMany({
    where: {
      authorId: req.user.id,
    },
  });
  if (!posts) {
    throw new Error('No posts found for this user');
  }
  return posts;
}
//delete post by id
export async function deletePostById(req: AuthentictedRequest) {
  const { id } = req.params;
  const post = await prisma.post.delete({
    where: {
      id: Number(id),
    },
  });
  if (!post) {
    throw new Error('Post deletion failed');
  }
  return post;
}
//TODO: edit post by id
export async function editPostById(req: AuthentictedRequest) {
  const { id } = req.params;
  const { title, content } = req.body;
  const post = await prisma.post.update({
    where: {
      id: Number(id),
    },
    data: {
      title,
      content,
    },
  });
  if (!post) {
    throw new Error('Post update failed');
  }
  return post;
}
