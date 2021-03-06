import bcrypt from "bcrypt"
import { User } from "@prisma/client"
import { PrismaClient } from "@prisma/client"

const jwt = require('jsonwebtoken')
export const prisma = new PrismaClient();

export const generateAuthToken = async (user: User) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("cannot read secret from environment variables");
  }
  const token = jwt.sign({ id: user.id }, secret, {
    expiresIn: 5 * 60, // 5 minutes,
  });
  await prisma.user.update({
    where: { id: user.id },
    data: { tokens: [...user.tokens, token] },
  });

  return token;
};

export const findByCredentials = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error();
    }

    // const isMatch = await bcrypt.compare(password, user?.password);

    // if (!isMatch) {
    //   throw new Error();
    // }

    return user;
  } catch (err) {
    return null;
  }
};