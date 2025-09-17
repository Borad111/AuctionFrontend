"use client";

import { ApiError } from "@/types/error/types";
import { useMemo } from "react";
import {  UseCategoriesReturn } from "../types";
import { useGetCategoriesQuery } from "../api/homeApi";


export const useCategories = (): UseCategoriesReturn => {

  const { data, error, isLoading, isFetching } = useGetCategoriesQuery();
  
  const categories = data?.categories || [];

  const errorMessage = error
    ? (error as ApiError)?.data?.message ?? "Failed to load categories"
    : null;

  return {
    categories,
    loading: isLoading || isFetching,
    error: errorMessage,
  };
};
