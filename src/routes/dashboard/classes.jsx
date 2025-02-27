import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/classes')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/classes"!</div>
}
