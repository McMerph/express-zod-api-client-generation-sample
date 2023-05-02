import {
  type createResultHandler,
  getMessageFromError,
  getStatusCodeFromError,
} from "express-zod-api";

// https://stackoverflow.com/a/50014868
type ReplaceReturnType<T extends (...args: any) => any, Return> = (
  ...a: Parameters<T>
) => Return;

export const handleError: ReplaceReturnType<
  Parameters<typeof createResultHandler>[0]["handler"],
  boolean
> = ({ response, error, logger, request }) => {
  if (!error) return false;

  const statusCode = getStatusCodeFromError(error);
  const message = getMessageFromError(error);
  logger.error({ url: request.url, stack: error.stack, message, error });
  response.status(statusCode).end(message);

  return true;
};
