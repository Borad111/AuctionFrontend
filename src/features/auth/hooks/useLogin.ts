"use client";
import { auth } from "@/utils/firebaseClient";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useLoginUserMutation, useLogoutUserMutation } from "../api/authApi";
import { toast } from "sonner";
import { LoginResponse } from "../types";

export const useLogin = () => {
  const [loginUser] = useLoginUserMutation();
  const [logoutUser] = useLogoutUserMutation();

  const loginHandler = async (email: string, password: string): Promise<LoginResponse> => {
    try {
      // 1. Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // 2. Get ID Token for backend
      const idToken = await user.getIdToken();
      
      // 3. Send token to backend for verification and user data
      const response = await loginUser({ idToken }).unwrap();
      
      // 4. Store user data and tokens
      localStorage.setItem("user", JSON.stringify(response.user));
      localStorage.setItem("accessToken", response.accessToken);
      if (response.refreshToken) {
        localStorage.setItem("refreshToken", response.refreshToken);
      }
      
      toast.success("Login successful!");
      return response;
    } catch (error: any) {
      console.error("Login error:", error);
      
      let errorMessage = "Login failed";
      if (error.code === "auth/invalid-credential") {
        errorMessage = "Invalid email or password";
      } else if (error.code === "auth/too-many-requests") {
        errorMessage = "Too many attempts. Try again later";
      } else if (error.code === "auth/user-not-found") {
        errorMessage = "User not found";
      } else if (error.code === "auth/user-disabled") {
        errorMessage = "Account has been disabled";
      }
      
      toast.error(errorMessage);
      throw error;
    }
  };

  const logoutHandler = async (): Promise<void> => {
    try {
      // 1. Sign out from Firebase
      await signOut(auth);
      
      // 2. Call backend logout
      await logoutUser().unwrap();
      
      // 3. Clear local storage
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      
      toast.success("Logged out successfully");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Logout failed");
      throw error;
    }
  };

  return {
    loginHandler,
    logoutHandler,
  };
};