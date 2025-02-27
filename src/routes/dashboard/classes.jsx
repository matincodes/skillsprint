import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/classes')({
  component: ClassesComponent,
})


const ClassesComponent = ()=>{
  return (
    <div className='border border-red-500 h-full'>
      <p>Classes</p>
    </div>
  )
}
