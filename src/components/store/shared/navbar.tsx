import { ThemeSwitch } from '@/components/theme-switch'
import { StoreTopBarData } from '../data/navbarData'
import SearchWithIcon from './searchWithIcon'

export function StoreTopNavbar() {
  return (
    <div className='w-full bg-slate-900 text-primary-foreground dark:text-foreground dark:bg-secondary'>
      <div className='flex items-center justify-evenly gap-3  w-[70%] mx-auto py-5 '>
        <p>LOGO</p>
        <SearchWithIcon></SearchWithIcon>
        <NavMap />
        <ThemeSwitch />
        {/* <ProfileDropdown /> */}
      </div>
    </div>
  )
}

function NavMap() {
  return (
    <div className='flex items-center justify-center gap-10'>
      {StoreTopBarData.map(({ icon, text, title }) => {
        return (
          <div key={title} className='flex items-center gap-1 w-full '>
            <div className='size-10'>{icon}</div>
            <div className='flex flex-col gap-0'>
              <h3 className='font-semibold text-nowrap'>{title}</h3>
              <small className='text-xs text-nowrap'>{text}</small>
            </div>
          </div>
        )
      })}
    </div>
  )
}
