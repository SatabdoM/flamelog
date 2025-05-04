import { prisma } from '@workspace/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { signupSchema, loginSchema } from './auth.schema';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';

// type signupData = {
//   email: string;
//   password: string;
//   name?: string;
// };
// type loginData = {
//   email: string;
//   password: string;
// };

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
  return user;
}

export async function login(data: loginSchema) {
  const user = await prisma.user.findUnique({ where: { email: data?.email } });
  if (!user) throw new Error('User does not exist');

  const passwordMatched = await bcrypt.compare(data?.password, user.password);
  if (!passwordMatched) throw new Error('Incorrect Password!');

  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '7d' });

  return { token, user };
}
