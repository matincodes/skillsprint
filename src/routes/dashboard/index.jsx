import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/')({
  component: DashboardComponent,
})


const DashboardComponent = ()=>{
     return (
       <div className='border border-red-500 h-full'>
         <p>Dashboard</p>
       </div>
     )
   }
   