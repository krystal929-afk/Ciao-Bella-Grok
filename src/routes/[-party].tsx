import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/-party")({
  beforeLoad: () => {
    throw redirect({ to: "/party", replace: true });
  },
});
