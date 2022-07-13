import { GraphQLObjectType } from "graphql";
import getAllBooksQuery from "../query/getAllBooksQuery";

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    books: getAllBooksQuery,
  },
});

export default query;
