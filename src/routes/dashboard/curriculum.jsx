import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/curriculum')({
  component: CurriculumComponent,
})

const CurriculumComponent = ()=>{
  return (
    <div className='border border-red-500 h-full'>
      <p>Curriculum</p>
    </div>
  )
}
