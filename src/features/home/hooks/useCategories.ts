// src/hooks/useCategories.ts (or wherever your hook is)
"use client";

import { handleError, mapApiErrorToMessage } from "@/utils/error/errorHandler";
import { homeApi, useGetCategoriesQuery } from "../api/homeApi";
import { UseCategoriesReturn } from "../types";

export const useCategories = (): UseCategoriesReturn => {
  const { data, error, isLoading, isFetching } = homeApi.useGetCategoriesQuery();
  const categories = data?.categories || [];

  let errorMessage: string | null = null;

  if (error) {
    // map to friendly message for UI first
    errorMessage = mapApiErrorToMessage(error) || "Failed to load categories";

    // still capture to Sentry (handleError will throw an AppError afterwards),
    // but don't let that break the hook — catch it.
    try {
      handleError(error, { section: "categories" }, false);
    } catch (err) {
      // handleError is expected to throw; we catch and ignore because
      // we already have the user-friendly message to show in UI.
      if (process.env.NODE_ENV === "development") {
        console.warn("useCategories handleError:", err);
      }
    }
  }

  return {
    categories,
    loading: isLoading || isFetching,
    error: errorMessage,
  };
};
