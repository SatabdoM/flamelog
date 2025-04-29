import { TestUser } from '@workspace/db';

declare global {
  namespace Express {
    interface Request {
      user?: TestUser;
    }
  }
}
