import { defineProject, mergeConfig } from "vitest/config";

export const sharedConfig = {
  test: {
    globals: true,
  },
};

export const uiConfig = mergeConfig(
  sharedConfig,
  defineProject({
    test: {
      environment: "jsdom",
    },
  }),
);
