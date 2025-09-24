import { z } from "zod";

export const CategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string().nullable(),
  auctionCount: z.string(), // string aayega, number mein transform karna hoga
}).strict();

export const CategoriesResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  categories: z.array(CategorySchema)
});
