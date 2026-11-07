import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/-party")({
  beforeLoad: () => {
    throw redirect({ to: "/party", statusCode: 301, replace: true });
  },
});
