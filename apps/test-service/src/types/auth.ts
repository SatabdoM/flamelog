import { Request } from 'express';
import { User } from '@workspace/db';

export interface AuthentictedRequest extends Request {
  user?: User;
}
