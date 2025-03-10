import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/student/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(auth)/student/login"!</div>;
}
