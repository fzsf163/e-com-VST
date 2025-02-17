import { ProfileDropdown } from '@/components/profile-dropdown'
import { ThemeSwitch } from '@/components/theme-switch'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_store')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <div className='ml-auto flex items-center space-x-4 w-full dark:bg-secondary bg-gray-500 text-primary-foreground dark:text-foreground'>
        <ThemeSwitch />
        <ProfileDropdown />
      </div>
      <Outlet />
    </div>
  )
}
