import bcrypt from "bcrypt";

import prisma from "../src/config/database";

const main = async () => {
  const hashedPassword = bcrypt.hashSync("admin", 10);
  const users = [
    {
      email: "admin@admin.com",
      password: hashedPassword,
    },
  ];
  const disciplines = [
    {
      name: "HTML e CSS",
      termId: 1,
    },
    {
      name: "JavaScript",
      termId: 2,
    },
    {
      name: "React",
      termId: 3,
    },
    {
      name: "Humildade",
      termId: 1,
    },
    {
      name: "Planejamento",
      termId: 2,
    },
  ];
  const teachers = [{ name: "Diego Pinho" }, { name: "Bruna Harmoni" }];
  const categories = [
    { name: "Projeto" },
    { name: "Prática" },
    { name: "Recuperação" },
  ];
  const terms = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
    { number: 6 },
  ];

  await prisma.user.createMany({ data: users });
  await prisma.discipline.createMany({ data: disciplines });
  await prisma.teacher.createMany({ data: teachers });
  await prisma.category.createMany({ data: categories });
  await prisma.term.createMany({ data: terms });
};
main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
