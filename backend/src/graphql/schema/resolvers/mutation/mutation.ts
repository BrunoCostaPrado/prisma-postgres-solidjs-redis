import { GraphQLObjectType } from "graphql";
import CreateBookMutation from "./createBookMutation";

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createBook: CreateBookMutation,
  },
});

export default mutation;
