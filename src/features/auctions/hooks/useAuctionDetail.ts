// src/features/auction/hooks/useAuctionDetail.ts
"use client";
import { handleError, mapApiErrorToMessage } from "@/utils/error/errorHandler";
import { auctionApi } from "../api/auctionApi";
import { UIAuctionDetail, useAuctionDetailReturn } from "../types";
import { transformAuctionData } from "../mappers/auctionMappers";

export const useAuctionDetail = (auctionId: string) : useAuctionDetailReturn => {
  const { data, error, isLoading, isFetching } =
  auctionApi.useGetAuctionDetailQuery(auctionId);

  let errorMessage: string | null = null;
  let auctionData: UIAuctionDetail | null = null;

  if (data?.auction) {
    auctionData = transformAuctionData(data.auction);
  }

  if (error) {
    errorMessage = mapApiErrorToMessage(error) || "Failed to load auction details";

    try {
      handleError(error, { section: "auctionDetail" }, false);
    } catch (err) {
      if (process.env.NODE_ENV === "development") {
        console.warn("useAuctionDetail handleError:", err);
      }
    }
  }

  return {
    auction: auctionData,
    loading: isLoading || isFetching,
    error: errorMessage,
  };
};
  