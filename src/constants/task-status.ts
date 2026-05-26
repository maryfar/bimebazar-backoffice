import type { TaskStatus } from '@/types/task.types'

export const TASK_STATUS_STYLES: Record<
  TaskStatus,
  string
> = {
  باز: 'bg-[#FFEF9D]  text-[#4F4700]',

  بسته: 'bg-green-100 text-green-900',

  'لغو شده':
    'bg-gray-200 text-gray-800',
}