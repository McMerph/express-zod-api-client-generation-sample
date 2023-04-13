import { defaultEndpointsFactory } from "express-zod-api";
import { z } from "zod";

export const helloWorldEndpoint = defaultEndpointsFactory.build({
  method: "get",
  input: z.object({
    // For empty input use z.object({})
    name: z.string().optional(),
  }),
  output: z.object({
    greetings: z.string(),
  }),
  async handler({ input: { name }, options, logger }) {
    logger.debug("Options:", options); // Middlewares provide options
    return { greetings: `Hello, ${name ?? "World"}. Happy coding!` };
  },
});
