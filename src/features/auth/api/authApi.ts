import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  UserResponse,
} from "../types";
import { baseQueryWithReauth } from "@/utils/api/baseQueryWithReauth";
import { config } from "@/config";
import { RootState } from "@/store/store";

export const authApi = createApi({
  reducerPath: "authApi",
      baseQuery: fetchBaseQuery({
    baseUrl: config.api.authApi,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.accessToken;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    registerUser: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (data) => ({
        url: `${config.api.authApi}/register`,
        method: "POST",
        body: data,
      }),
    }),

    loginUser: builder.mutation<LoginResponse, LoginRequest>({
      query: (data) => ({
        url: `${config.api.authApi}/login`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),
    refreshToken: builder.mutation<{ accessToken: string }, void>({
      query: () => ({
        url: `${config.api.authApi}/refresh-token`,
        method: "POST",
      }),
    }),

    getCurrentUser: builder.mutation<UserResponse, void>({
      query: () => ({
        url: `${config.api.authApi}/me`,
        method: "GET",
      }),
    }),
    logoutUser: builder.mutation<void, void>({
      query: () => ({
        url: `${config.api.authApi}/logout`,
        method: "POST",
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
}); 

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetCurrentUserMutation,
  useLogoutUserMutation,
  useRefreshTokenMutation
} = authApi;
