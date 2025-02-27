import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/')({
  component: DashboardComponent,
})


const DashboardComponent = ()=>{
     return (
       <>
         <p>Dashboard</p>
       </>
     )
   }
   