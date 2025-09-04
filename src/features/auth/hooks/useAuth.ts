"use client";
import { useDispatch } from "react-redux";
import { setAuth, logoutRequested } from "@/store/slices/authSlice";
import { UserResponse } from "../types";

export const useAuth = () => {
  const dispatch = useDispatch();

  const setAuthData = (accessToken: string, user: UserResponse) => {
    dispatch(setAuth({ accessToken, user }));
  };

  const logout = () => {
    dispatch(logoutRequested());
  };

  return { setAuth: setAuthData, logout };
};
