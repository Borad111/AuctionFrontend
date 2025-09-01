import { createApi } from "@reduxjs/toolkit/query/react";
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse, UserResponse } from "../types";
import { baseQueryWithReauth } from "@/utils/api/baseQueryWithReauth";
import { config } from "@/config";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth,
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

    getCurrentUser: builder.query<UserResponse, void>({
      query: () => `${config.api.authApi}/me`,
      providesTags: ["Auth"],
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
  useGetCurrentUserQuery,
  useLogoutUserMutation,
} = authApi;