"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { routes } from "@/constants/routes";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      // ✅ Agar user nahi hai toh login pe bhej do
      router.replace(routes.login);
    }
  }, [user, router]);

  // ⚠️ Jab tak user check ho raha hai, kuch mat dikhao
  if (!user) {
    return <div className="p-6 text-center text-gray-600"></div>;
  }

  return <>{children}</>;
}
