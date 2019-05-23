module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      "jsx": false
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
    commonjs: true,
    "jest/globals": true
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  plugins: ["@typescript-eslint", "react", "jest"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    eqeqeq: "warn",
    strict: "off",
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error"
  }
};
