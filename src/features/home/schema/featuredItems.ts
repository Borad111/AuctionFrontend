import { z } from "zod";

export const AuctionImageSchema = z.object({
  id: z.string(),
  imageUrl: z.string().url(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

export const AuctionCategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string().nullable(),
});

export const AuctionSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  startingPrice: z.number(),
  currentPrice: z.number(),
  status: z.enum(["ACTIVE", "ENDED", "CANCELLED"]),
  startTime: z.string().datetime(),
  endTime: z.string().datetime(),
  sellerId: z.string(),
  categoryId: z.string().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  images: z.array(AuctionImageSchema),
  category: AuctionCategorySchema,
});

export const FeaturedResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  auctions: z.array(AuctionSchema),
});

// ✅ Type inference from schema (no need to duplicate manually)
export type FeaturedResponse = z.infer<typeof FeaturedResponseSchema>;
export type Auction = z.infer<typeof AuctionSchema>;
