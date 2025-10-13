import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";

import { queryClient } from "@/base/query-client";

import "./styles.css";

export interface RouterContextValue {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContextValue>()({
  head: () => ({
    meta: [
      {
        title: "React",
      },
      {
        name: "description",
        content: "React",
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <HeadContent />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
      <Scripts />
    </>
  );
}
