import type { TaskStatus } from '@/types/task.types'

export const TASK_STATUS_STYLES: Record<
  TaskStatus,
  string
> = {
  باز: 'bg-yellow-100 text-yellow-900',

  بسته: 'bg-green-100 text-green-900',

  'لغو شده':
    'bg-gray-100 text-gray-800',
}