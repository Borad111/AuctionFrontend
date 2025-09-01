"use client";
import { auth } from "@/utils/firebaseClient";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRegisterUserMutation } from "../api/authApi";
import { toast } from "sonner";
import { RegisterInputDto } from "../schemas/authSchema";
import { RegisterResponse } from "../types";

export const useRegister = () => {
  const [registerUser, { isLoading, error }] = useRegisterUserMutation();

  const registerHandler = async (data: RegisterInputDto): Promise<RegisterResponse> => {
    try {
      // Step 1: Firebase Authentication
      const userCred = await createUserWithEmailAndPassword(auth, data.email, data.password);

      // Step 2: Firebase UID
      const uid = userCred.user.uid;

      // Step 3: Call backend API to save user in Postgres
      const response = await registerUser({
        id: uid,
        name: data.name,
        email: data.email,
        role: data.role || "BIDDER",
      }).unwrap();

      toast.success("Registration successful!");
      return response;
    } catch (error: any) {
      console.error("Registration error:", error);
      
      let errorMessage = "Registration failed";
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "Email already exists";
      } else if (error.code === "auth/weak-password") {
        errorMessage = "Password is too weak";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid email address";
      }
      
      toast.error(errorMessage);
      throw error;
    }
  };

  return { 
    registerHandler, 
    isLoading, 
    error 
  };
};