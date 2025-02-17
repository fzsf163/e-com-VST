import NotFoundError from '@/features/errors/not-found-error'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/user')({
  component: RouteComponent,
  notFoundComponent: NotFoundError,
})

function RouteComponent() {
  return (
    <div>
      <Outlet />
    </div>
  )
}
