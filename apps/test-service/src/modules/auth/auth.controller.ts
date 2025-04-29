import { Request, Response } from 'express';
import * as AuthService from './auth.service';
import { TestUser } from '@packages/prisma-client';

export async function signup(req: Request, res: Response) {
  try {
    const user = await AuthService.signup(req.body);
    res.status(200).json({ user });
  } catch (error: any) {
    if (error.message === 'User exists') {
      res.status(400).json({ message: error.message });
    }
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
export async function login(req: Request, res: Response) {
  try {
    const user = await AuthService.login(req.body);
    res.status(200).json({ user });
  } catch (error: any) {
    if (error.message === 'User does not exist') {
      res.status(400).json({ message: error.message });
    } else if (error.message === 'Incorrect Password') {
      res.status(401).json({ message: error.message });
    }
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
export async function getMe(req: Request, res: Response) {
  //   if (!req.user) {
  //     return res.status(401).json({ message: 'Unauthorized user. Please Log in/Sign Up' });
  //   }
  //   res.json({ user: req?.user });
}
