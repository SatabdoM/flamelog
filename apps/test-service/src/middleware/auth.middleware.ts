import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { prisma } from '@workspace/db';
import { AuthentictedRequest } from '../types/auth';

export const requireAuth = async (req: AuthentictedRequest, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) {
    res.status(401).json({ message: 'Unauthorized user. Please Log in/Sign Up' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'supersecret') as { id: string };
    const user = await prisma.user.findUnique({ where: { id: Number(decoded.id) } });
    if (!user) {
      res.status(401).json({ message: 'Unauthorized user. Please Log in/Sign Up' });
    }
    req.user = user;
    next();
  } catch (error) {
    console.error('Error verifying token: ', error);
    res.status(401).json({ message: 'Unauthorized user. Please Log in/Sign Up' });
  }
};
export const requireAdmin = async (req: AuthentictedRequest, res: Response, next: NextFunction) => {
  if (!req.user || !req.user.roles.includes('ADMIN')) {
    res.status(401).json({ message: 'Forbidden: Insuffient permission' });
  }
  next();
};
