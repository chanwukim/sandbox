import path from "path";

import { uiConfig } from "@repo/config-vitest";
import { defineConfig } from "vitest/config";

export default defineConfig({
  ...uiConfig,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    ...uiConfig.test,
    setupFiles: ["./src/test/setup.ts"],
  },
});
