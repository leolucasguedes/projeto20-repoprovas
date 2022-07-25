import prisma from "../config/database";

import { CreateUserData } from "../schemas/authSchema";

export async function createUser(user: CreateUserData) {
  await prisma.user.create({ data: user });
}

export async function findByEmail(email: string) {
  return prisma.user.findFirst({ where: { email } });
}

export function findUser(id:number) {
  return prisma.user.findUnique({where:{id}})
}