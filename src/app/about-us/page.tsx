"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { useLogoutUserMutation } from "@/features/auth/api/authApi";
import { logoutRequested } from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";

export default function AboutUsPage() {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const [logoutUser, { isLoading }] = useLogoutUserMutation();

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap(); // 🔄 API call to backend
    } catch (err) {
      console.warn("⚠️ Logout API failed:", err);
      // even if API fails, local state clear karna better hai
    }
    dispatch(logoutRequested()); // 🔄 Redux state clear
    router.push("/"); // 🔄 redirect to login page
  };

  if (!user) {
    return (
      <div className="p-6 text-center text-gray-600">
        Loading user data...
      </div>
    );
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>

      <div className="bg-white shadow-md rounded-xl p-4 mb-6">
        <p className="mb-2">
          <span className="font-medium">Name:</span> {user.name}
        </p>
        <p className="mb-2">
          <span className="font-medium">Email:</span> {user.email}
        </p>
        <p className="mb-2">
          <span className="font-medium">Role:</span> {user.role}
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
  );
}
