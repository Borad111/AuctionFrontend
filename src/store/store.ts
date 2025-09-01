import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { authApi } from "@/features/auth/api/authApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const appStore=configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(
        authApi.middleware,
        ),
        devTools:true,
})
setupListeners(appStore.dispatch);
export type RootState=ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;