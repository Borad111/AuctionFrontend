import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(3, "Username must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  role: z.enum(["ADMIN", "BIDDER", "SELLER", "USER"]).optional(),
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

export type RegisterInputDto = z.infer<typeof registerSchema>;
export type LoginInputDto = z.infer<typeof loginSchema>;