  // src/utils/api/baseQueryWithReauth.ts
  import {
    fetchBaseQuery,
    FetchArgs,
    FetchBaseQueryError,
  } from "@reduxjs/toolkit/query/react";
  import type { BaseQueryFn } from "@reduxjs/toolkit/query";
  import { RootState } from "@/store/store";
  import { logoutRequested, setAccessToken } from "@/store/slices/authSlice";
  import { env } from "@/config/env";
  import { config } from "@/config";
  import { handleError } from "../error/errorHandler";

  let isRefreshing = false;
  let pendingRequests: ((token: string) => void)[] = [];

  const baseQuery = fetchBaseQuery({
    baseUrl: config.api.baseUrl,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.accessToken;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });

  export const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
  > = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    try {
        if (result.error && result.error.status === 401) {
      if (!isRefreshing) {
        isRefreshing = true;
        try {
          // 🔄 call refresh API
          const refreshResult = await baseQuery(
            { url: `${config.api.auth}/refresh-token`, method: "POST" },
            api,
            extraOptions
          );

          if (refreshResult.data && (refreshResult.data as any).accessToken) {
            const newToken = (refreshResult.data as any).accessToken;

            // ✅ update redux
            api.dispatch(setAccessToken(newToken));

            // ✅ pending requests ko resolve karo
            pendingRequests.forEach((cb) => cb(newToken));
            pendingRequests = [];

            // retry original request
            result = await baseQuery(args, api, extraOptions);
          } else {
            api.dispatch(logoutRequested());
          }
        } catch (err) {
          api.dispatch(logoutRequested());
        } finally {
          isRefreshing = false;
        }
      } else {
        // agar refresh already ho raha hai → queue me add karo
        result = await new Promise((resolve) => {
          pendingRequests.push(async (token: string) => {
            const retryResult = await baseQuery(args, api, extraOptions);
            resolve(retryResult);
          });
        });
      }
    }
    } catch (error) {
      handleError(error,{endpoint:(args as any)?.url || "unknown" , args});
    }

    if(result.error){
      handleError(result.error, { endpoint: (args as any)?.url || "unknown", args });
    }


    return result;
  };
