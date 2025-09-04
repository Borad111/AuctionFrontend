import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { toast } from "sonner";
import { config } from "@/config";
import { RootState } from "@/store/store";
import { logoutRequested, setAccessToken } from "@/store/slices/authSlice";
import { routes } from "@/constants/routes";

const baseQuery = fetchBaseQuery({
  baseUrl: config.api.baseUrl,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken;
    
    // Manually check if token exists
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
      console.log('📤 Sending request with token:', token.substring(0, 20) + '...');
    } else {
      console.log('⚠️ No access token available for request');
    }
    
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    console.warn("⏳ Access token expired, trying refresh...");

    const refreshResult = await baseQuery(
      { url: "/auth/refresh-token", method: "POST" },
      api,
      extraOptions
    );

    if (refreshResult?.data) {
      const newAccessToken = (refreshResult.data as any).accessToken;
      if (newAccessToken) {
        api.dispatch(setAccessToken(newAccessToken));
        // retry original request
        result = await baseQuery(args, api, extraOptions);
      }
    } else {
      api.dispatch(logoutRequested());
      if (typeof window !== "undefined") {
        window.location.href = routes.login;
      }

      toast.error("Session expired. Please login again.");
    }
  }

  return result;
};
