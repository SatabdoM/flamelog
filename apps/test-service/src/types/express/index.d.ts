import { TestUser } from '@prisma/client';

declare global {
  namespace Express {
    interface Request {
      user?: TestUser;
    }
  }
}
