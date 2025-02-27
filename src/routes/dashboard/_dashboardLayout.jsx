import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/_dashboardLayout')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/_dashboardLayout"!</div>
}
