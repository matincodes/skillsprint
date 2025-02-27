import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/settings')({
  component: SettingsComponent,
})


const SettingsComponent = ()=>{
  return (
    <>
      <p>Settings</p>
    </>
  )
}
