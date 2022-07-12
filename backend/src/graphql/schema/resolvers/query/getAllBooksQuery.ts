import { GraphQLList } from "graphql";
import GqlBook from "../../typedefs/GQLBOOKS";
import { Book } from "../../../../data/types/Book";

const books: Book[] = [
  { id: 1, title: "The Awakening", author: "Kate Chopin" },
  { id: 2, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 3, title: "The Lord of the Rings", author: "J. R. R. Tolkien" },
];

const getAllBooksQuery = {
  type: GraphQLList(GqlBook),
  resolve: (_source: unknown): Book[] => {
    return books;
  },
};

export default getAllBooksQuery;
