import prisma from "../config/database";

export async function findById(id: number) {
  return await prisma.category.findUnique({where: { id }});
}
