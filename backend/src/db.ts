import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function db() {
  // const Post = await prisma.user
  //   .create({
  //     data: {
  //       name: "Bruno Costa Prado",
  //       email: "bruno@costa.com",
  //     },
  //   })
  //   .then(() => {
  //     console.log("Created");
  //   });

  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
}

db()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export default db;
