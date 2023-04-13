import { Client } from "express-zod-api";
import fs from "fs";

import { routing } from "../src/routing";

fs.writeFileSync(
  "./src/client/api.ts",
  new Client({ routing }).print({ noEmitHelpers: true, removeComments: true }),
  "utf-8"
);
