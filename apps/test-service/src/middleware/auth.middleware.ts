import { Response, NextFunction } from 'express';
import { prisma } from '@workspace/db';
import { AuthentictedRequest } from '../types/auth';
import { verifyAccessToken } from '../utils/jwt';

export const requireAuth = async (req: AuthentictedRequest, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) {
    res.status(401).json({ message: 'Unauthenticated' });
    return;
  }

  try {
    const decoded = verifyAccessToken(token);
    const user = await prisma.user.findUnique({ where: { id: Number(decoded.userId) } });
    if (!user) {
      res.status(401).json({ message: 'User not found' });
      return;
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }
};

export const requireAdmin = async (req: AuthentictedRequest, res: Response, next: NextFunction) => {
  if (!req.user || !req.user.roles.includes('ADMIN')) {
    res.status(403).json({ message: 'Forbidden: Insufficient permission' });
    return;
  }
  next();
};
