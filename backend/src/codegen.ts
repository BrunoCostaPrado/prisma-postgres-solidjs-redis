import * as fs from "fs";
import * as schemaAsPlugin from "@graphql-codegen/schema-ast";
import { parse, printSchema } from "graphql";
import { Types } from "@graphql-codegen/plugin-helpers";
import { codegen } from "@graphql-codegen/core";
import path from "path";
import schema from "./graphql/schema/schema";

async function performCodegen(options: Types.GenerateOptions): Promise<void> {
  const output = await codegen(options);
  fs.writeFile(
    path.join(__dirname, "/graphql/generated/", options.filename),
    output,
    () => {
      console.log("Output generated");
    }
  );
}

export async function performAsCodegen(): Promise<void> {
  const options: Types.GenerateOptions = {
    config: { numericEnums: true },
    documents: [],
    filename: "schema.graphql",
    schema: parse(printSchema(schema)),
    plugins: [{ "schema-ast": {} }],
    pluginMap: {
      "schema-ast": schemaAsPlugin,
    },
  };
  performCodegen(options);
}
