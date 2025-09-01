"use client";
import { useEffect } from "react";
import { useGetCurrentUserQuery } from "../api/authApi";
import { useLogin } from "./useLogin";

export const useAuth = () => {
  const { data: userData, isLoading: isUserLoading, error: userError, refetch } = useGetCurrentUserQuery();
  const { logoutHandler } = useLogin();

  useEffect(() => {
    // Check if user is authenticated on app load
    const token = localStorage.getItem("accessToken");
    if (token) {
      refetch();
    }
  }, [refetch]);

  const isAuthenticated = !!userData?.user;
  const user = userData?.user;

  const logout = async () => {
    await logoutHandler();
  };

  return {
    user,
    isAuthenticated,
    isLoading: isUserLoading,
    error: userError,
    logout,
    refetch,
  };
};