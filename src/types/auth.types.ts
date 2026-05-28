export type Role = 'admin' | 'user'

export interface User {
    id: number
    mobile: string
    password: string
    role: Role
    name: string
    avatar: string
}