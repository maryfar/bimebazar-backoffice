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
}

export const MENU_ITEMS: MenuItem[] = [
  {
    label: 'خانه',
    path: '/',
    icon: Home,
    roles: ['admin', 'user'],
  },

  {
    label: 'وظیفه‌ها',
    path: '/tasks',
    icon: Task,
    roles: ['admin', 'user'],
  },

  {
    label: 'سفارشات',
    path: '/orders',
    icon: Order,
    roles: ['admin'],
  },

  {
    label: 'مشتریان',
    path: '/customers',
    icon: User,
    roles: ['admin'],
  },
]