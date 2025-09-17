import { config } from "@/config";
import { simpleBaseQuery } from "@/utils/api/baseQueryWithReauth";
import { createApi } from "@reduxjs/toolkit/query/react";
import { CategoriesResponse, FeaturedResponse } from "../types";
import { CategoriesResponseSchema } from "../schema/categories";

export const homeApi = createApi({
  reducerPath: "homeApi",
  baseQuery: simpleBaseQuery,
  refetchOnReconnect: true,
  refetchOnFocus:false,
  keepUnusedDataFor: 60,
  tagTypes: ["Auctions", "Categories", "Users"],
  endpoints: (builder) => ({
    getAllAuctions: builder.query<FeaturedResponse, void>({
      query: () => ({
        url: `${config.api.auction}/auctions`,
        method: "GET",
      }),
      providesTags: ["Auctions"],
    }),
    getCategories: builder.query<CategoriesResponse, void>({
      query: () => ({
        url: `${config.api.auction}/categories`,
        method: "GET",
      }),
     transformResponse: (response) => {
        const parsed = CategoriesResponseSchema.parse(response);
        return parsed;
      },
      providesTags: ["Categories"],
    }),
  }),
});

export const { useGetAllAuctionsQuery, useGetCategoriesQuery } = homeApi;
