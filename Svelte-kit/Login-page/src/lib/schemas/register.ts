import { z } from "zod";
export const formDateSchema = z
  .object({
    username: z
      .string()
      .min(1, "Username is required")
      .regex(
        /^[a-zA-Z0-9]+$/,
        "Usernames can only contain letters and numbers"
      ),
    gender: z.union([z.string("Male"), z.string("Female")]),
    email: z.email("The email is not valid"),
    password: z.string().min(6, "Password must be at least 6 characters long."),
    confirmPassword: z.string().min(6, "Password confirmation is required.."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "passwords not match",
  });

export type formDateType = z.infer<typeof formDateSchema>;
