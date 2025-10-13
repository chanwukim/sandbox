import path from "path";

import { sharedConfig } from "@repo/config-vitest";
import { defineConfig } from "vitest/config";

export default defineConfig({
  ...sharedConfig,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    ...sharedConfig.test,
    setupFiles: ["./src/test/setup.ts"],
  },
});
