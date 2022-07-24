import prisma from "../config/database.js";

export async function findById(id: number) {
  return await prisma.category.findUnique({
    where: {
      id,
    },
  });
}
