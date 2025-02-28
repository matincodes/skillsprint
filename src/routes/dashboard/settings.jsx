import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/settings')({
  component: SettingsComponent,
})


const SettingsComponent = ()=>{
  return (
    <div className='border border-red-500 h-full'>
      <p>Settings</p>
    </div>
  )
}
