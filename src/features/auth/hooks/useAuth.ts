"use client";
import { useDispatch } from "react-redux";
import {
  setAuth,
  logoutRequested,
  setAccessToken,
} from "@/store/slices/authSlice";
import { User } from "../types";

export const useAuth = () => {
  const dispatch = useDispatch();

  const setAuthData = (accessToken: string, user: User) => {
    dispatch(setAuth({ accessToken, user }));
  };

  const updateAccessToken = (accessToken: string) => {
    dispatch(setAccessToken(accessToken));
  };

  const logout = () => {
    dispatch(logoutRequested());
  };

  return { setAuth: setAuthData,
            logout,
            setAccessToken:updateAccessToken };
  };
