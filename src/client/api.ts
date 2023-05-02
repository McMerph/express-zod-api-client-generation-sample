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

type GetV1SampleYamlInput = Record<string, unknown>;

type GetV1SampleYamlResponse = string;

export type Path = "/v1/hello" | "/v1/sample-yaml";

export type Method = "get" | "post" | "put" | "delete" | "patch";

export type MethodPath = `${Method} ${Path}`;

export type Input = {
  "get /v1/hello": GetV1HelloInput;
  "get /v1/sample-yaml": GetV1SampleYamlInput;
} & Record<MethodPath, any>;

export type Response = {
  "get /v1/hello": GetV1HelloResponse;
  "get /v1/sample-yaml": GetV1SampleYamlResponse;
} & Record<MethodPath, any>;
