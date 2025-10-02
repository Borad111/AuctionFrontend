// src/features/auction/schema/auctionDetail.ts

import { z } from "zod";

export const AuctionDetailSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  description: z.string(),
  startingPrice: z.number(),
  reservePrice: z.number().nullable(),
  currentBid: z.number(),
  status: z.enum(["ACTIVE", "ENDED", "CANCELLED"]),
  startTime: z.string().datetime(),
  endTime: z.string().datetime(),
  seller: z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
  }),
  category: z.object({
    id: z.string().uuid(),
    name: z.string(),
  }),
  images: z.array(
    z.object({
      id: z.string().uuid(),
      url: z.string().url(),
    })
  ),
  bids: z.array(
    z.object({
      id: z.string().uuid(),
      amount: z.number(),
      bidder: z.object({
        id: z.string(),
        name: z.string(),
      }),
    })
  ),
});

export const AuctionDetailResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  auction: AuctionDetailSchema,
});