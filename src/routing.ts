import type { Routing } from "express-zod-api";

import { getSampleYamlEndpoint } from "./endpoints/getSampleYamlEndpoint";
import { helloWorldEndpoint } from "./endpoints/helloWorldEndpoint";

export const routing: Routing = {
  v1: {
    hello: helloWorldEndpoint,
    "sample-yaml": getSampleYamlEndpoint,
  },
};
