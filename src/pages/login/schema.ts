import { toEnglishDigits } from '@/utils/digitsConverter'
import { z } from 'zod'

export const loginSchema = z.object({

mobile: z
  .string()
  .nonempty("شماره موبایل الزامی است")
  .transform((val) => {
    let digits = toEnglishDigits(val.trim());
    if (digits.length === 10 && digits.startsWith('9')) {
      digits = '0' + digits;
    }
    return digits; 
  })
  .refine(
    (val) => /^09\d{9}$/.test(val),
    {
    message: 'شماره موبایل باید 10 یا 11 رقم بوده و با 09 یا 9 شروع شود', 
   }
  ),

    password: z
        .string()
        .nonempty(" رمز عبور الزامی است")
        .min(6, 'رمز عبور حداقل ۶ کاراکتر باشد'),
})

export type LoginFormData = z.infer<typeof loginSchema>