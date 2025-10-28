import { config as baseConfig } from "@repo/config-eslint/react-internal";
import pluginImport from "eslint-plugin-import";

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...baseConfig,
  {
    plugins: {
      import: pluginImport,
    },
    rules: {
      "import/order": [
        "error",
        {
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "index",
          ],
          pathGroups: [
            { pattern: "@/pages/**", group: "internal", position: "before" },
            { pattern: "@/modules/**", group: "internal", position: "before" },
            { pattern: "@/features/**", group: "internal", position: "before" },
            { pattern: "@/entities/**", group: "internal", position: "before" },
            { pattern: "@/base/**", group: "internal", position: "before" },
          ],
        },
      ],
    },
  },
];
