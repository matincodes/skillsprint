import NotificationSettings from '@/components/Forms/NotificationSettings'
import { PasswordSettings } from '@/components/Forms/PasswordSettings'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/settings')({
  component: SettingsComponent,
})


const SettingsComponent = ()=>{
  return (
    <div className='bg-[#121212] px-7 py-5 h-full'>
      <PasswordSettings/>
      <div className='border-[1px] border-black mt-10'/>
      <NotificationSettings/>
    </div>
  )
}
