import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/instructor/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(auth)/instructor/"!</div>
}
