"use client";

import { useEffect } from "react";
import {
  useRefreshTokenMutation,
  useGetCurrentUserMutation,
} from "@/features/auth/api/authApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { routes } from "@/constants/routes";
import { useAuth } from "@/features/auth/hooks/useAuth";
import * as Sentry from "@sentry/nextjs";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const {setAccessToken,setAuth,logout}=useAuth();
  const [refreshToken] = useRefreshTokenMutation();
  const [getCurrentUser] = useGetCurrentUserMutation();

  useEffect(() => {
    const initAuth = async () => {
      try {
        const res = await refreshToken().unwrap();
        if (res?.accessToken) {
          
          setAccessToken(res.accessToken);
          try {
            const userRes = await getCurrentUser().unwrap();
            if (userRes?.user) {
              setAuth(  res.accessToken,  userRes.user );
              Sentry.setUser({
                id:userRes.user.id,
                email:userRes.user.email,
                name:userRes.user.name
              })
            }
          } catch (meErr) {
            console.warn("⚠️ /me call failed, but refresh token valid:", meErr);
            toast.warning("Unable to fetch user details, retrying...");
          }   
        }
      } catch (refreshErr) {
        logout();
        Sentry.setUser(null);
        toast.error("Session expired. Please login again.");
        router.push(routes.login); // 🔽 Safe redirect
      } 
    };
    initAuth();
  }, [ refreshToken, getCurrentUser, router]);
  return <>{children}</>;

}
