"use client";
import { auth } from "@/utils/firebaseClient";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useLoginUserMutation } from "../api/authApi";
import { toast } from "sonner";
import { LoginResponse } from "../types";
import { useAuth } from "./useAuth";
import { useRouter } from "next/navigation";
import { addBreadcrumb, handleError } from "@/utils/error/errorHandler";
import { routes } from "@/constants/routes";

export const useLogin = () => {
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const { setAuth } = useAuth();
  const router = useRouter();

  const loginHandler = async (email: string, password: string) => {
    try {
      addBreadcrumb("User clicked login button", "auth");
      // 🔑 Firebase login
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const idToken = await userCredential.user.getIdToken();

      // 🔑 Call backend login API
      const response = await loginUser({ idToken }).unwrap();

      // ✅ Redux me save karo
      setAuth(response.accessToken, response.user);

      toast.success("Login successful!");
      router.replace(routes.aboutUs);

      return response;
    } catch (error) {
      handleError(error, { email, route: routes.aboutUs, endpoint: "loginUser" });
    }
  };

  return { loginHandler, isLoading };
};
