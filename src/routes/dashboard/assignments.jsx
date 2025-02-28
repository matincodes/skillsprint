import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/assignments')({
  component: AssignmentComponent,
})

const AssignmentComponent = ()=>{
  return (
    <div className='border border-red-500 h-full'>
      <p>Assigments</p>
    </div>
  )
}
