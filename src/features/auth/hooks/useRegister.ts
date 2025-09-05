"use client";
import { auth } from "@/utils/firebaseClient";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRegisterUserMutation } from "../api/authApi";
import { toast } from "sonner";
import { RegisterInput, RegisterResponse } from "../types";
import { handleError } from "@/utils/error/errorHandler";

export const useRegister = () => {
  const [registerUser, { isLoading, error }] = useRegisterUserMutation();

  const registerHandler = async (data: RegisterInput): Promise<RegisterResponse> => {
    try {
      // Step 1: Firebase Authentication
      const userCred = await createUserWithEmailAndPassword(auth, data.email, data.password);

      // Step 2: Firebase UID
      const uid = userCred.user.uid;

      // Step 3: Call backend API (password mat bhejna)
      const response = await registerUser({
        id: uid,
        name: data.name,
        email: data.email,
        role: data.role || "BIDDER",
      }).unwrap();

      toast.success("Registration successful!");
      return response;
    } catch (error: any) {
      handleError(error);
      // ✅ explicitly throw error so function always returns something
      throw new Error("Registration failed");
    }
  };

  return { registerHandler, isLoading, error };
};
