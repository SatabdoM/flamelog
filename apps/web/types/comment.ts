import { User } from './user';

export type TComment = {
  id: number;
  author: User;
  createdAt: Date;
  message: string;
};
