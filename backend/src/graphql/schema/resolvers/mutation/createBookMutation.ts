import { GraphQLNonNull } from "graphql";
import { Book } from "@prisma/client";
import CreateBookInput from "../../typedefs/CreateBookInput";
import GqlBook from "../../typedefs/GQLBOOKS";
import { IApolloServerContext } from "../../../../interfaces/IApolloServerContext";
import { createBook } from "../../../../data/bookService";

const CreateBookMutation = {
  type: GqlBook,
  args: {
    input: {
      type: GraphQLNonNull(CreateBookInput),
      description: "Book input to create",
    },
  },

  resolve: async (
    _source: unknown,
    { input: { title, author } }: any,
    __context: IApolloServerContext
  ): Promise<Book> => {
    return createBook(title, author);
  },
};

export default CreateBookMutation;
