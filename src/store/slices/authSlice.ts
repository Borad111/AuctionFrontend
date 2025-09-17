import { User } from "@/features/auth/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface AuthState {
  accessToken: string | null;
  user: User | null;
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
      action: PayloadAction<{ accessToken: string; user: User }>
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


