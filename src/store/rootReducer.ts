import { combineReducers } from "@reduxjs/toolkit";
import { authApi } from "@/features/auth/api/authApi";
import authReducer from "./slices/authSlice";
import { homeApi } from "@/features/home/api/homeApi";
import { auctionApi } from "@/features/auctions/api/auctionApi";

const rootReducer = combineReducers({
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
  [homeApi.reducerPath]: homeApi.reducer,
  [auctionApi.reducerPath]: auctionApi.reducer,
});

export default rootReducer;
