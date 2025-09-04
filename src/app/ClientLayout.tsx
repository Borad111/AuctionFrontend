"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuth, setAccessToken, logoutRequested } from "@/store/slices/authSlice";
import {
  useRefreshTokenMutation,
  useGetCurrentUserMutation,
} from "@/features/auth/api/authApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { routes } from "@/constants/routes";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const [refreshToken] = useRefreshTokenMutation();
  const [getCurrentUser] = useGetCurrentUserMutation();

  useEffect(() => {
    const initAuth = async () => {
      try {
        // 🔄 Step 1: Refresh token call
        const res = await refreshToken().unwrap();

        if (res?.accessToken) {
          // ✅ Access token set karo
          dispatch(setAccessToken(res.accessToken));

          try {
            // 🔄 Step 2: /me call
            const userRes = await getCurrentUser().unwrap();

            if (userRes?.user) {
              dispatch(setAuth({ accessToken: res.accessToken, user: userRes.user }));
            }
          } catch (meErr) {
            console.warn("⚠️ /me call failed, but refresh token valid:", meErr);
            toast.warning("Unable to fetch user details, retrying...");
            // ❌ Yahan logout mat karo, sirf warning do
          }   
        }
      } catch (refreshErr) {
        console.error("❌ Refresh token failed:", refreshErr);
        dispatch(logoutRequested());
        toast.error("Session expired. Please login again.");
        router.push(routes.login); // 🔽 Safe redirect
      }
    };

    initAuth();
  }, [dispatch, refreshToken, getCurrentUser, router]);

  return <>{children}</>;
}
