import prisma from "../config/database";

export async function findAll() {
  const terms = await prisma.term.findMany({
    select: { number: true },
  });
  return terms.map((term) => term.number);
}
