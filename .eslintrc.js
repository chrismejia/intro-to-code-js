module.exports = {
  env: {
    browser: true,
    es2021: true,
    mocha: true,
  },
  extends: [
    "standard",
    "prettier",
    "plugin:mocha/recommended",
    "plugin:chai-friendly/recommended",
  ],
  plugins: ["prettier", "mocha", "chai-friendly"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
    "mocha/no-skipped-tests": "off",
    "mocha/no-setup-in-describe": "off",
    "no-self-compare": "off",
  },
};
