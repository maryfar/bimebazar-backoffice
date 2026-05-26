import { z } from 'zod'

export const loginSchema = z.object({
    mobile: z
        .string()
        .regex(/^0?9\d{9}$/, 'شماره موبایل معتبر نیست'),

    password: z
        .string()
        .min(6, 'رمز عبور حداقل ۶ کاراکتر باشد'),
})

export type LoginFormData = z.infer<typeof loginSchema>