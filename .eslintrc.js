module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
    commonjs: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "react-app",
    "plugin:prettier/recommended"
  ],
  plugins: ["@typescript-eslint", "react"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    eqeqeq: "warn",
    strict: "off"
  }
};
