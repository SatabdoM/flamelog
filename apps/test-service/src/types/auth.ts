import { Request } from 'express';
import { TestUser } from '@workspace/db';

export interface AuthentictedRequest extends Request {
  user: TestUser;
}
