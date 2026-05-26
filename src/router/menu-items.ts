import type { Role } from '@/types/auth'

import Home from '@/assets/images/home.svg'
import Task from '@/assets/images/task.svg'
import Order from '@/assets/images/order.svg'
import User from '@/assets/images/user.svg'

export interface MenuItem {
  label: string
  path: string
  icon: string
  roles: Role[]
  disable: boolean
}

export const MENU_ITEMS: MenuItem[] = [
  {
    label: 'خانه',
    path: '/',
    icon: Home,
    roles: ['admin', 'user'],
    disable: false
  },

  {
    label: 'وظیفه‌ها',
    path: '/tasks',
    icon: Task,
    roles: ['admin', 'user'],
    disable: true
  },

  {
    label: 'سفارشات',
    path: '/orders',
    icon: Order,
    roles: ['admin'],
     disable: false
  },

  {
    label: 'مشتریان',
    path: '/customers',
    icon: User,
    roles: ['admin'],
     disable: false
  },
]