import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { authApi } from "@/features/auth/api/authApi";

export const appStore=configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(
        authApi.middleware,
        ),
        devTools:true,
})

export type RootState=ReturnType<typeof appStore.getState>;