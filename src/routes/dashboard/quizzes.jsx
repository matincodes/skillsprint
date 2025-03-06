import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/quizzes')({
  component: QuizzesComponent,
})

const QuizzesComponent = ()=>{
  return (
    <div className='border border-red-500 h-full'>
      <p>Quizzes</p>
    </div>
  )
}
