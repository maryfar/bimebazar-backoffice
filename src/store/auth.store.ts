import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { USERS } from '@/mocks/users'
import { User } from '@/types/auth'

interface LoginData {
    mobile: string
    password: string
}

interface AuthStore {
    user: User | null

    login: (data: LoginData) => boolean

    logout: () => void
}

export const useAuthStore = create<AuthStore>()(
    persist(
        (set) => ({
            user: null,

            login: ({ mobile, password }) => {
                const user = USERS.find(
                    (item) =>
                        item.mobile === mobile &&
                        item.password === password,
                )

                if (!user) return false

                set({ user })

                return true
            },

            logout: () => {
                set({ user: null })
            },
        }),

        {
            name: 'auth-storage',
        },
    ),
)