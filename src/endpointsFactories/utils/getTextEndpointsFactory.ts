import { createResultHandler, EndpointsFactory } from "express-zod-api";
import mime from "mime";
import { z } from "zod";

import { handleError } from "./handleError";

const negativeMime = mime.getType("txt") ?? "text/plain";

export const getTextEndpointsFactory = (positiveMime: string) =>
  new EndpointsFactory({
    resultHandler: createResultHandler({
      getPositiveResponse: () => ({
        schema: z.string(),
        mimeType: positiveMime,
        statusCode: 200,
      }),
      getNegativeResponse: () => ({
        schema: z.string(),
        mimeType: negativeMime,
        statusCode: 500,
      }),
      handler(params) {
        const isErrorHandled = handleError(params);
        if (isErrorHandled) return;

        if ("data" in params.output && typeof params.output.data === "string") {
          params.response
            .set("Content-Type", positiveMime)
            .status(200)
            .end(params.output.data);
        } else {
          params.response
            .set("Content-Type", negativeMime)
            .status(500)
            .end("Data is missing");
        }
      },
    }),
  });
