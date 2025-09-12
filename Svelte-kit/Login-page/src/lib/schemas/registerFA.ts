import { z } from "zod";
export const formDateSchema = z
  .object({
    username: z
      .string()
      .min(1, "نام کاربری خدایی لازمه")
      .regex(/^[a-zA-Z0-9]+$/, "فقط حروف انگلیسی و اعداد"),
    gender: z.union([z.string("Male"), z.string("Female")]),
    email: z.email("ایمیلتو درست وارد کن"),
    password: z
      .string()
      .min(6, "رمز حداقل 6 کاراکتر، برای امنیت خودت ارزش قائل شو"),
    confirmPassword: z.string().min(6, "تکرار رمز با رمز یکیه؟ دقت کن"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "رمز و تکرارش یکی نیست دقت کن",
  });

export type formDateType = z.infer<typeof formDateSchema>;
