import { z } from "zod";

import { yamlEndpointsFactory } from "../endpointsFactories/yamlEndpointsFactory";

const yaml = `foo: bar
pleh: help
stuff:
  foo: bar
  bar: foo
`;

export const getSampleYamlEndpoint = yamlEndpointsFactory.build({
  method: "get",
  input: z.object({}),
  output: z.object({ data: z.string() }),
  async handler() {
    return { data: yaml };
  },
});
