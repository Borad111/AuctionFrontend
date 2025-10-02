import { config } from "@/config";
import { simpleBaseQuery } from "@/utils/api/baseQueryWithReauth";
import { createApi } from "@reduxjs/toolkit/query/react";
import { CategoriesResponse, FeaturedResponse } from "../types";
import { CategoriesResponseSchema } from "../schema/categories";
import { handleError } from "@/utils/error/errorHandler";
import { FeaturedResponseSchema } from "../schema/featuredItems";
import { AppError, ValidationError } from "@/utils/error/errors";
import { ZodError } from "zod";
import { handleTransformError } from "@/utils/api/transform";

export const homeApi = createApi({
  reducerPath: "homeApi",
  baseQuery: simpleBaseQuery,

  tagTypes: ["Auctions", "Categories", "Users"],
  refetchOnFocus: true,
  refetchOnReconnect: true,
  keepUnusedDataFor: 300, // 5 minutes
  endpoints: (builder) => ({
    getAllAuctions: builder.query<FeaturedResponse, void>({
      query: () => ({
        url: `${config.api.auction}/auctions`,
        method: "GET",
      }),
      transformResponse: (response: unknown): FeaturedResponse => {
        try {
          return FeaturedResponseSchema.parse(response);
        } catch (err) {
          handleError(err, { endpoint: "featuredItems" }, false);
          throw err;
        }
      },
      providesTags: ["Auctions"],
    }),

      getCategories: builder.query<CategoriesResponse, void>({
        query: () => ({
          url: `${config.api.auction}/categories`,
          method: "GET",
        }),
        transformResponse: (response: unknown): CategoriesResponse => {
          return CategoriesResponseSchema.parse(response);
        },
        transformErrorResponse: handleTransformError,
        providesTags: ["Categories"],
        keepUnusedDataFor: 600, // 10 minutes
      }),
  }),
});

export const { useGetAllAuctionsQuery, useGetCategoriesQuery } = homeApi;
