import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/assignments')({
  component: AssignmentComponent,
})

const AssignmentComponent = ()=>{
  return (
    <>
      <p>Assigments</p>
    </>
  )
}
