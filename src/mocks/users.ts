
import type { User } from "@/types/auth.types";

export const USERS: User[] = [
    {
        id: 1,
        mobile: '09120000001',
        password: '123456',
        role: 'admin',
        name: 'مهرداد رضایی',
        avatar: '/images/portrait06.svg',
    },
    {
        id: 2,
        mobile: '09120000002',
        password: '123456',
        role: 'user',
        name: 'مریم فرهادی',
        avatar: '/images/portrait02.svg',
    },
];
