import { defineConfig } from "vitest/config";

import { sharedConfig } from "@repo/config-vitest";

export default defineConfig({
  ...sharedConfig,
  test: {
    projects: [
      {
        root: "./packages",
        test: {
          ...sharedConfig.test,
        },
      },
      {
        root: "./apps",
        test: {
          ...sharedConfig.test,
          environment: "jsdom",
          setupFiles: ["./react/src/test/setup.ts"],
        },
      },
    ],
  },
});
