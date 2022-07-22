import bcrypt from "bcrypt";

import prisma from "../src/config/database.js";

// create admin user
async function main(){
  const SALT = 10;
  const hashedPassword = bcrypt.hashSync("admin", SALT);

  await prisma.user.upsert({
    where: { email: "admin@gmail.com" },
    update: {},
    create: {
      email: "admin@gmail.com",
      password: hashedPassword
    }
  });
}

main().catch(e => {
  console.log(e);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
})