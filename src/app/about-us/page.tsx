"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { useLogoutUserMutation } from "@/features/auth/api/authApi";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useAuth } from "@/features/auth/hooks/useAuth";

export default function AboutUsPage() {
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();

  const [logoutUser, { isLoading }] = useLogoutUserMutation();
  const {logout}=useAuth();
  const handleLogout = async () => {
    try {
      await logoutUser().unwrap(); // 🔄 API call to backend
    } catch (err) {
      console.warn("⚠️ Logout API failed:", err);
    }
    logout(); // 🔄 Redux state clear
    router.replace("/"); // 🔄 redirect to login page
  };

  

  return (
    <ProtectedRoute>
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>

      <div className="bg-white shadow-md rounded-xl p-4 mb-6">
        <p className="mb-2">
          <span className="font-medium">Name:</span> {user?.name}
        </p>
        <p className="mb-2">
          <span className="font-medium">Email:</span> {user?.email}
        </p>
        <p className="mb-2">
          <span className="font-medium">Role:</span> {user?.role}
        </p>
      </div>

      <button
        onClick={handleLogout}
        disabled={isLoading}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 disabled:opacity-50"
      >
        {isLoading ? "Logging out..." : "Logout"}
      </button>
    </div>
    </ProtectedRoute>
  );
}
