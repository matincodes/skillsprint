import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/curriculum')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/curriculum"!</div>
}
