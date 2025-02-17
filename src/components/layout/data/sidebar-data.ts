import {
  IconBarrierBlock,
  IconBrowserCheck,
  IconBug,
  IconChecklist,
  IconError404,
  IconHelp,
  IconLayoutDashboard,
  IconLock,
  IconLockAccess,
  IconMessages,
  IconNotification,
  IconPackages,
  IconPalette,
  IconServerOff,
  IconSettings,
  IconTool,
  IconUserCog,
  IconUserOff,
  IconUsers,
} from '@tabler/icons-react'
import { AudioWaveform, Command, GalleryVerticalEnd } from 'lucide-react'
import { type SidebarData } from '../types'

const avatar = import.meta.env.VITE_AVATAR
export const sidebarData: SidebarData = {
  user: {
    name: 'fancyfinger',
    email: 'fancyfinger@gmail.com',
    avatar: avatar,
  },
  teams: [
    {
      name: 'Shadcn Admin',
      logo: Command,
      plan: 'Vite + ShadcnUI',
    },
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
  ],
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'Dashboard',
          url: '/user',
          icon: IconLayoutDashboard,
        },
        {
          title: 'Orders',
          icon: IconChecklist,
          items: [
            {
              title: 'Orders',
              url: '/user/orders',
            },
            {
              title: 'Drafts',
              url: '/user/drafts',
            },
            {
              title: 'Abandoned Checkouts',
              url: '/user/acheckouts',
            },
          ],
        },
        {
          title: 'Apps',
          url: '/user/apps',
          icon: IconPackages,
        },
        {
          title: 'Chats',
          url: '/user/chats',
          badge: '3',
          icon: IconMessages,
        },
        {
          title: 'Products',
          icon: IconUsers,
          items: [
            {
              title: 'Products',
              url: '/user/products',
            },
            {
              title: 'Collections',
              url: '/user/products/$section',
            },
            {
              title: 'Inventory',
              url: '/user/products/$section',
            },
            {
              title: 'GiftCards',
              url: '/user/products/$section',
            },
          ],
        },
        {
          title: 'Users',
          url: '/user/users',
          icon: IconUsers,
        },
      ],
    },
    {
      title: 'Pages',
      items: [
        {
          title: 'Auth',
          icon: IconLockAccess,
          items: [
            {
              title: 'Sign In',
              url: '/sign-in',
            },
            {
              title: 'Sign In (2 Col)',
              url: '/sign-in-2',
            },
            {
              title: 'Sign Up',
              url: '/sign-up',
            },
            {
              title: 'Forgot Password',
              url: '/forgot-password',
            },
            {
              title: 'OTP',
              url: '/otp',
            },
          ],
        },
        {
          title: 'Errors',
          icon: IconBug,
          items: [
            {
              title: 'Unauthorized',
              url: '/401',
              icon: IconLock,
            },
            {
              title: 'Forbidden',
              url: '/403',
              icon: IconUserOff,
            },
            {
              title: 'Not Found',
              url: '/404',
              icon: IconError404,
            },
            {
              title: 'Internal Server Error',
              url: '/500',
              icon: IconServerOff,
            },
            {
              title: 'Maintenance Error',
              url: '/503',
              icon: IconBarrierBlock,
            },
          ],
        },
      ],
    },
    {
      title: 'Other',
      items: [
        {
          title: 'Settings',
          icon: IconSettings,
          items: [
            {
              title: 'Profile',
              url: '/user/settings',
              icon: IconUserCog,
            },
            {
              title: 'Account',
              url: '/user/settings/account',
              icon: IconTool,
            },
            {
              title: 'Appearance',
              url: '/user/settings/appearance',
              icon: IconPalette,
            },
            {
              title: 'Notifications',
              url: '/user/settings/notifications',
              icon: IconNotification,
            },
            {
              title: 'Display',
              url: '/user/settings/display',
              icon: IconBrowserCheck,
            },
          ],
        },
        {
          title: 'Help Center',
          url: '/user/help-center',
          icon: IconHelp,
        },
      ],
    },
  ],
}
