type GetV1HelloInput = {
  name?: string | undefined;
};

type GetV1HelloResponse =
  | {
      status: "success";
      data: {
        greetings: string;
      };
    }
  | {
      status: "error";
      error: {
        message: string;
      };
    };

export type Path = "/v1/hello";

export type Method = "get" | "post" | "put" | "delete" | "patch";

export type MethodPath = `${Method} ${Path}`;

export type Input = {
  "get /v1/hello": GetV1HelloInput;
} & Record<MethodPath, any>;

export type Response = {
  "get /v1/hello": GetV1HelloResponse;
} & Record<MethodPath, any>;
