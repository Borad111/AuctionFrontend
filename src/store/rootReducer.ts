import { authApi } from "@/features/auth/api/authApi";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer=combineReducers({
    [authApi.reducerPath]:authApi.reducer,
})
export default rootReducer;