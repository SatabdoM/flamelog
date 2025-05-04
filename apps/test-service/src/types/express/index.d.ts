import { TestUser } from '@packages/prisma-client';

declare global {
  namespace Express {
    interface Request {
      user?: TestUser;
      decodedUser?: { id: string };
    }
  }
}
