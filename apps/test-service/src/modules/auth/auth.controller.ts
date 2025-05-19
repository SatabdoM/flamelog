import { Request, Response } from 'express';
import * as AuthService from './auth.service';
import { AuthentictedRequest } from '../../types/auth';
import { config } from '../../config';

const isProd = process.env.NODE_ENV === 'production';

export async function signup(req: Request, res: Response) {
  try {
    const { accessToken, refreshToken, user } = await AuthService.signup(req.body);
    res
      .cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: isProd,
        sameSite: 'lax',
        maxAge: config.token.accessTokenExpiryTime,
      })
      .cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: isProd,
        sameSite: 'lax',
        maxAge: config.token.refreshTokenExpiryTime,
      })
      .status(200)
      .json({ user });
  } catch (error: any) {
    if (error.message === 'User exists') {
      res.status(400).json({ message: error.message });
      return;
    }
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { accessToken, refreshToken, user } = await AuthService.login(req.body);
    res
      .cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: isProd,
        sameSite: 'lax',
        maxAge: config.token.accessTokenExpiryTime,
      })
      .cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: isProd,
        sameSite: 'lax',
        maxAge: config.token.refreshTokenExpiryTime,
      })
      .status(200)
      .json({ user });
  } catch (error: any) {
    if (error.message === 'User does not exist') {
      res.status(400).json({ message: error.message });
      return;
    } else if (error.message === 'Incorrect Password') {
      res.status(401).json({ message: error.message });
      return;
    }
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function logout(req: Request, res: Response) {
  // Invalidate refresh token in database
  // Right now we don't have any methods to do so, so it's fine

  // Clear cookies
  res.clearCookie('accessToken');
  res.clearCookie('refreshToken');

  res.sendStatus(204);
}

export async function refresh(req: Request, res: Response) {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      res.status(401).json({ message: 'Refresh token not found' });
      return;
    }

    const { accessToken } = await AuthService.refresh(refreshToken);

    res
      .cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: isProd,
        sameSite: 'lax',
        maxAge: config.token.accessTokenExpiryTime,
      })
      .status(200)
      .json({ message: 'Tokens refreshed' });
  } catch (error) {
    console.error('Error refreshing token:', error);
    res.status(401).json({ message: 'Invalid refresh token' });
    return;
  }
}

export async function getMe(req: AuthentictedRequest, res: Response) {
  if (!req.user) {
    res.status(401).json({ message: 'Unauthorized user. Please Log in/Sign Up' });
    return;
  }
  res.json({ user: req?.user });
}
export async function adminAccess(req: Request, res: Response) {
  res.json({ message: 'Admin access granted' });
}
