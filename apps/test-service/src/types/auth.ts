import { Request } from 'express';
import { TestUser } from '@packages/prisma-client';

export interface AuthentictedRequest extends Request {
  user: TestUser;
}
