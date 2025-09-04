import { combineReducers } from "@reduxjs/toolkit";
import { authApi } from "@/features/auth/api/authApi";
import authReducer from "./slices/authSlice";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  auth: authReducer,
});

export default rootReducer;
