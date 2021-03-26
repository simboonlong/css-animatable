// https://github.com/mdn/data/tree/master/css
import pkg from "json-schema-to-typescript";
import fs from "fs";
import schema from "./properties.schema.json";

const { compile } = pkg;

compile(schema, "MdnData")
  .then((ts) => {
    fs.writeFileSync("./src/mdn-data.d.ts", ts);
  })
  .catch((e) => {
    console.log(e);
  });
