export const shared = {
  rules: {
    // {} 타입 허용
    // @see https://typescript-eslint.io/rules/no-empty-object-type
    "@typescript-eslint/no-empty-object-type": "off",
    /**
     * 타입 import시 type 키워드 사용
     * 예) import { type User } from "@/types/user";
     * @see https://typescript-eslint.io/rules/consistent-type-imports
     */
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
  },
};
