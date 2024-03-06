module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["standard-with-typescript", "plugin:react/recommended"],
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
  plugins: ["react"],
  rules: {
    "@typescript-eslint/quotes": [
      "error",
      "double",
      { allowTemplateLiterals: true },
    ],
    "@typescript-eslint/comma-dangle": ["error", "always-multiline"],
    semi: "off",
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: { delimiter: "semi" },
      },
    ],
    "eol-last": ["off"],
  },
};