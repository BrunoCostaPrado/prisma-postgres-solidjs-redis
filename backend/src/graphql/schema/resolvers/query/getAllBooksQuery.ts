import { GraphQLList } from "graphql";
import { Book } from "@prisma/client";
import GqlBook from "../../typedefs/GQLBOOKS";
import { IApolloServerContext } from "../../../../interfaces/IApolloServerContext";
import { getAllBooks } from "../../../../data/bookService";

const getAllBooksQuery = {
  type: GraphQLList(GqlBook),
  resolve: async (
    _source: unknown,
    __args: unknown,
    __context: IApolloServerContext,
    __info: unknown
  ): Promise<Book[]> => {
    return getAllBooks();
  },
};

export default getAllBooksQuery;

// const books: Book[] = [
//   { id: 1,
//      title: "The Awakening",
//    author: "Kate Chopin" },
//   { id: 2,
//      title: "The Great Gatsby",
//    author: "F. Scott Fitzgerald" },
//   { id: 3,
//      title: "The Lord of the Rings",
//    author: "J. R. R. Tolkien" },
// ];
