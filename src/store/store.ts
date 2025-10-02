import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { authApi } from "@/features/auth/api/authApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { homeApi } from "@/features/home/api/homeApi";
import { auctionApi } from "@/features/auctions/api/auctionApi";

export const appStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware,homeApi.middleware,auctionApi.middleware),
  devTools: true,
});

setupListeners(appStore.dispatch);

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
