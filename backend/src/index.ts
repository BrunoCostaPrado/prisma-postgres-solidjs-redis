import { ApolloServer, gql } from "apollo-server";
import dotenv from "dotenv";
import schema from "./graphql/schema/schema";

dotenv.config();

const server = new ApolloServer({
  schema,
  // playground: process.env.NODE_ENV !== "production",
});

server
  .listen()
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  })
  .catch((err) => {
    console.log("Erro ", err);
  });
