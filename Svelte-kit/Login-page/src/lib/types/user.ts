import type { formDateSchema } from "$lib/schemas/register";
import { z } from "zod";

export type User = Omit<z.infer<typeof formDateSchema>, "confirmPassword">;

