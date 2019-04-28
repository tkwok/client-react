module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "react-app",
    "plugin:prettier/recommended"
  ],
  plugins: ["@typescript-eslint", "react"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {}
};
