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

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth, // ✅ centralized
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    registerUser: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (data) => ({
        url: `${config.api.auth}/register`,
        method: "POST",
        body: data,
      }),
    }),

    loginUser: builder.mutation<LoginResponse, LoginRequest>({
      query: (data) => ({
        url: `${config.api.auth}/login`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),
    refreshToken: builder.mutation<{ accessToken: string }, void>({
      query: () => ({
        url: `${config.api.auth}/refresh-token`,
        method: "POST",
      }),
    }),

    getCurrentUser: builder.mutation<UserResponse, void>({
      query: () => ({
        url: `${config.api.auth}/me`,
        method: "GET",
      }),
    }),
    logoutUser: builder.mutation<void, void>({
      query: () => ({
        url: `${config.api.auth}/logout`,
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
  useRefreshTokenMutation,
} = authApi;
