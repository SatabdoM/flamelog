import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';

type signupData = {
  email: string;
  username: string;
  password: string;
  name?: string;
};
type loginData = {
  email: string;
  password: string;
};

export async function signup(data: signupData) {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  const user = await prisma.TestUser.create({
    data: {
      email: data.email,
      username: data.username,
      password: hashedPassword,
      name: data?.name,
    },
  });
  return user;
}

export async function login(data: loginData) {
  const user = await prisma.TestUser.findUnique({ where: { email: data?.email } });
  if (!user) throw new Error('User with this email does not exist!');

  const passwordMatched = await bcrypt.compare(data?.password, user.password);
  if (!passwordMatched) throw new Error('Incorrect Password!');

  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '7d' });

  return { token, user };
}
