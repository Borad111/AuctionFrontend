import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { config } from "@/config";

const getAccessToken = () =>
  typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
const setAccessToken = (token: string | null) => {
  if (typeof window !== "undefined") {
    if (token) localStorage.setItem("accessToken", token);
    else localStorage.removeItem("accessToken");
  }
};

const baseQuery = fetchBaseQuery({
  baseUrl: config.api.baseUrl,
  prepareHeaders: (headers) => {
    const token = getAccessToken();
    if (token) headers.set("Authorization", `Bearer ${token}`);
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
    // attempt refresh
    const refreshResult = await baseQuery(
      { url: "/auth/refresh", method: "POST" },
      api,
      extraOptions
    );

    if (refreshResult?.data) {
      // assume server returns { accessToken }
      // @ts-ignore
      const newAccessToken = (refreshResult.data as any).accessToken;
      if (newAccessToken) {
        setAccessToken(newAccessToken);
        // retry original query
        result = await baseQuery(args, api, extraOptions);
      }
    } else {
      // refresh failed — logout flow
      setAccessToken(null);
      // optionally dispatch logout action
      api.dispatch({ type: "auth/logoutRequested" });
    }
  }

  return result;
};
