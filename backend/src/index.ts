import { ApolloServer } from "apollo-server";
import dotenv from "dotenv";
import { IApolloServerContext } from "./interfaces/IApolloServerContext";
import schema from "./graphql/schema/schema";
import { performAstCodegen } from "./codegen";
import { prisma } from "@prisma/client";

dotenv.config();

const startServer = () => {
  performAstCodegen();

  const context: IApolloServerContext = {
    prisma,
  };

  const server = new ApolloServer({
    schema,
    // playground: process.env.NODE_ENV !== 'production',
    context,
  });

  server
    .listen()
    .then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    })
    .catch((err) => {
      console.log("Erro ", err);
    });
};

startServer();
