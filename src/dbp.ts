import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // const Post = await prisma.user
  //   .create({
  //     data: {
  //       name: "Bruno",
  //       email: "bruno@buno.com",
  //     },
  //   })
  //   .then(() => {
  //     console.log("Created");
  //   });

  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export default main;
