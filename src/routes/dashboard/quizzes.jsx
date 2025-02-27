import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/quizzes')({
  component: QuizzesComponent,
})

const QuizzesComponent = ()=>{
  return (
    <>
      <p>Quizzes</p>
    </>
  )
}
