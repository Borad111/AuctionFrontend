"use client";

import { ApiError } from "@/types/error/types";
import { useGetAllAuctionsQuery } from "../api/homeApi";
import { Auction } from "../types";
import { useMemo } from "react"; // ✅ Add useMemo for optimization

  interface UseFeaturedAuctionsReturn {
    featuredAuctions: Auction[];
    loading: boolean;
    error: string | null;
  }

  export const useFeaturedAuctions = (): UseFeaturedAuctionsReturn => {
    const { data, error, isLoading, isFetching } = useGetAllAuctionsQuery(undefined, {
        refetchOnFocus: true,  
    }
    );    

  // ✅ useMemo for expensive calculations
  const featuredAuctions = useMemo(() => {
    const auctions = data?.auctions || [];

    return auctions
      .filter(
        (auction: Auction) =>
          auction.status === "ACTIVE" && new Date(auction.endTime) > new Date()
      )
      .slice(0, 8);
  }, [data?.auctions]);

  // ✅ Better error handling
  const errorMessage = error
    ? (error as ApiError)?.data?.message ?? "Failed to load featured auctions"
    : null;

  return {
    featuredAuctions,
    loading: isLoading || isFetching,
    error: errorMessage,
  };
};
