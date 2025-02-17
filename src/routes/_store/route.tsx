import { StoreTopNavbar } from '@/components/store/shared/navbar'
import NavbarItems from '@/components/store/shared/secondNav'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_store')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <StoreTopNavbar></StoreTopNavbar>
      <NavbarItems></NavbarItems>
      {/* <CategoryList /> */}
      <Outlet />
    </div>
  )
}
