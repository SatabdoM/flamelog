import { prisma } from '@workspace/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';

type signupData = {
  email: string;
  password: string;
  name?: string;
};
type loginData = {
  email: string;
  password: string;
};

export async function signup(data: signupData) {
  const existingUser = await prisma.testUser.findUnique({ where: { email: data?.email } });
  if (existingUser) throw new Error('User exists');

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await prisma.testUser.create({
    data: {
      email: data.email,
      password: hashedPassword,
      name: data?.name,
    },
  });
  return user;
}

export async function login(data: loginData) {
  const user = await prisma.testUser.findUnique({ where: { email: data?.email } });
  if (!user) throw new Error('User does not exist');

  const passwordMatched = await bcrypt.compare(data?.password, user.password);
  if (!passwordMatched) throw new Error('Incorrect Password!');

  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '7d' });

  return { token, user };
}
