// src/features/auction/api/auctionApi.ts

import { config } from "@/config";
import { simpleBaseQuery } from "@/utils/api/baseQueryWithReauth";
import { createApi } from "@reduxjs/toolkit/query/react";
import { AuctionDetailResponse } from "../types";
import { AuctionDetailResponseSchema } from "../schema/auctionDetail";
import { handleTransformError } from "@/utils/api/transform";

export const auctionApi = createApi({
  reducerPath: "auctionApi",
  baseQuery: simpleBaseQuery,   
  tagTypes: ["AuctionDetail"],
  refetchOnFocus: true,
  refetchOnReconnect: true,
  keepUnusedDataFor: 300, // 5 minutes
  endpoints: (builder) => ({
    getAuctionDetail: builder.query<AuctionDetailResponse, string>({
      query: (auctionId: string) => ({
        url: `${config.api.auction}/auction/${auctionId}`,
        method: "GET",
      }),
      transformResponse: (response: unknown): AuctionDetailResponse => {
        return AuctionDetailResponseSchema.parse(response);
      },
      transformErrorResponse: handleTransformError,
      providesTags: (result, error, auctionId) => [
        { type: "AuctionDetail", id: auctionId },
      ],
    }),
  }),
});

export const { useGetAuctionDetailQuery } = auctionApi;
