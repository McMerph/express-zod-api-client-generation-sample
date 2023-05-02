import mime from "mime";

import { getTextEndpointsFactory } from "./utils/getTextEndpointsFactory";

export const yamlEndpointsFactory = getTextEndpointsFactory(
  mime.getType("yaml") ?? "application/yaml"
);
