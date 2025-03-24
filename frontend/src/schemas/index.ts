import { z } from "zod";

export const RegisterSchema = z.object({
    email: z.string().min(1, "Email is required").email("Enter valid email"),
    password: z.string().min(6, "Password should be at least 6 characters").regex(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character")
})

export const LoginSchema = z.object({
    email: z.string().min(1, "Email is required"),
    password: z.string().min(1, "Password is required")
})

export type RegisterSchemaType = z.infer<typeof RegisterSchema>
export type LoginSchemaType = z.infer<typeof LoginSchema>