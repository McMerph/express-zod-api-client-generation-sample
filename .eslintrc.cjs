module.exports = {
  env: {
    jest: true,
    es2021: true,
    node: true,
  },
  extends: ["xo", "prettier", "plugin:sonar/recommended"],
  overrides: [
    {
      extends: ["xo-typescript", "prettier"],
      files: ["*.ts", "*.tsx"],
    },
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "sonar", "simple-import-sort"],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "sonar/deprecation": "error",
  },
};
