import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserResponse } from "@/features/auth/types";

interface AuthState {
  accessToken: string | null;
  user: UserResponse | null;
}

const initialState: AuthState = {
  accessToken: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (
      state,
      action: PayloadAction<{ accessToken: string; user: UserResponse }>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    logoutRequested: (state) => {
      state.accessToken = null;
      state.user = null;
    },
  },
});

export const { setAuth, setAccessToken, logoutRequested } = authSlice.actions;
export default authSlice.reducer;
