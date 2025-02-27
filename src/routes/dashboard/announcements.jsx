import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/announcements')({
  component: AnnouncementComponent,
})


const AnnouncementComponent = () =>{
  return(
    <>
      <p>Announcement</p>
    </>
  )
}