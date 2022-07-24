import prisma from "../config/database.js";

export async function findAll() {
  const terms = await prisma.term.findMany({
    select: { number: true },
  });
  return terms.map((term) => term.number);
}
