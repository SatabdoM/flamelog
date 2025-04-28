import { Request, Response } from 'express';
import * as AuthService from './auth.service';

export async function signup(req: Request, res: Response) {
  const user = await AuthService.signup(req.body);
  res.status(200).json({ user });
}
export async function login(req: Request, res: Response) {
  const { token, user } = await AuthService.login(req.body);
  res.status(200).json({ token, user });
}
export async function getMe(req: Request, res: Response) {
  if (!req.user) {
    res.status(401).json({ message: 'Unauthorized user. Please Log in/Sign Up' });
  }
  res.json({ user: req?.user });
}
