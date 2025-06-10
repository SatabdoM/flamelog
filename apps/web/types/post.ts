import { User } from './user';

export type TPost = {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  author: User;
  authorId: number;
  likeCount: number;
  commentCount: number;
};
