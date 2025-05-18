import bcrypt from 'bcryptjs';

import { prisma } from '@workspace/db';
import { signupSchema, loginSchema } from './auth.schema';
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from '../../utils/jwt';

export async function signup(data: signupSchema) {
  const existingUser = await prisma.user.findUnique({ where: { email: data?.email } });
  if (existingUser) throw new Error('User exists');

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await prisma.user.create({
    data: {
      email: data.email,
      password: hashedPassword,
      name: data?.name,
      roles: ['USER'],
    },
  });

  const accessToken = generateAccessToken(user.id);
  const refreshToken = generateRefreshToken(user.id);

  return { accessToken, refreshToken, user };
}

export async function login(data: loginSchema) {
  const user = await prisma.user.findUnique({ where: { email: data?.email } });
  if (!user) throw new Error('User does not exist');

  const passwordMatched = await bcrypt.compare(data?.password, user.password);
  if (!passwordMatched) throw new Error('Incorrect Password!');

  const accessToken = generateAccessToken(user.id);
  const refreshToken = generateRefreshToken(user.id);

  return { accessToken, refreshToken, user };
}

export async function refresh(token: string) {
  try {
    const decoded = verifyRefreshToken(token);

    const user = await prisma.user.findUnique({ where: { id: decoded.userId } });
    if (!user) throw new Error('User not found');

    const accessToken = generateAccessToken(user.id);

    console.log('New access token generated');

    // Optionally rotate refresh token
    // const newRefreshToken = generateRefreshToken(user.id);

    return { accessToken };
  } catch (err) {
    throw new Error('Invalid refresh token');
  }
}
