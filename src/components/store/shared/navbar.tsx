import { ThemeSwitch } from '@/components/theme-switch'
import { Link } from '@tanstack/react-router'
import { StoreTopBarData } from '../data/navbarData'
import SignInModal from './modalSIngIn'
import SearchWithIcon from './searchWithIcon'

export function StoreTopNavbar() {
  return (
    <div className='w-full  bg-slate-900 text-primary-foreground dark:text-foreground dark:bg-secondary'>
      <div className='flex items-center justify-center gap-10 py-5 '>
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
        if (title === 'Offers') {
          return (
            <Link
              to='/offers'
              key={title}
              className='flex items-center gap-1 w-full '
            >
              <div className='size-10'>{icon}</div>
              <div className='flex flex-col gap-0'>
                <h3 className='font-semibold text-nowrap'>{title}</h3>
                <small className='text-xs text-nowrap'>{text}</small>
              </div>
            </Link>
          )
        } else {
          return (
            <div key={title}>
              <SignInModal icon={icon} text={text} title={title}></SignInModal>
            </div>
          )
        }
      })}
    </div>
  )
}
