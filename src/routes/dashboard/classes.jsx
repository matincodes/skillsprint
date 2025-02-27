import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/classes')({
  component: ClassesComponent,
})


const ClassesComponent = ()=>{
  return (
    <>
      <p>Classes</p>
    </>
  )
}
