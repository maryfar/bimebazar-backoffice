import type { Role } from "@/types/auth.types";


export const DEFAULT_ROUTE_BY_ROLE: Record<
  Role,
  string
> = {
  admin: '/tasks',
  user: '/tasks/my-tasks',
}