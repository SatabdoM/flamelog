import jwt from 'jsonwebtoken';
import { config } from '../config';

const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || 'accesssupersecret';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'refreshsupersecret';

export const generateAccessToken = (userId: number) => {
  const accessToken = jwt.sign({ userId }, JWT_ACCESS_SECRET, {
    expiresIn: config.token.accessTokenExpiryTime,
  });

  return accessToken;
};

export const generateRefreshToken = (userId: number) => {
  const refreshToken = jwt.sign({ userId }, JWT_REFRESH_SECRET, {
    expiresIn: config.token.refreshTokenExpiryTime,
  });

  return refreshToken;
};

export const verifyAccessToken = (token: string) => {
  return jwt.verify(token, JWT_ACCESS_SECRET) as { userId: number };
};

export const verifyRefreshToken = (token: string) => {
  return jwt.verify(token, JWT_REFRESH_SECRET) as { userId: number };
};
