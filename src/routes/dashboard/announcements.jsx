import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/announcements')({
  component: AnnouncementComponent,
})


const AnnouncementComponent = () =>{
  return(
    <div className='border border-red-500 h-full'>
      <p>Announcement</p>
    </div>
  )
}