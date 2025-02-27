import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/quizzes')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/quizzes"!</div>
}
