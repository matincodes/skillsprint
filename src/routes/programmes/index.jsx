import React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/programmes/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello &quot;/programmes/&quot;!</div>
}
