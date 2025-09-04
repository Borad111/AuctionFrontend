"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginForm } from "../components/LoginForm";
import { RegisterForm } from "../components/RegisterForm";

export function AuthContainer() {
  const [activeTab, setActiveTab] = useState("login");
  const router = useRouter();

  // ✅ check user from redux
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    if (user) {
      // agar already login hai → redirect
      router.replace("/about-us"); 
    }
  }, [user, router]);

  const handleSwitchToRegister = () => setActiveTab("register");
  const handleSwitchToLogin = () => setActiveTab("login");

  const handleAuthSuccess = () => {
    console.log("Authentication successful!");
    router.push("/about-us"); // ✅ after login/register, redirect to about page
  };

  // agar user login hai, toh yaha kuch bhi render na karo (redirect hoga useEffect se)
  if (user) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 rounded-xl bg-white shadow-md">
            <TabsTrigger value="login" className="rounded-xl data-[state=active]:bg-gray-100">
              Login
            </TabsTrigger>
            <TabsTrigger value="register" className="rounded-xl data-[state=active]:bg-gray-100">
              Register
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <LoginForm 
              onSwitchToRegister={handleSwitchToRegister}
              onLoginSuccess={handleAuthSuccess}
            />
          </TabsContent>

          <TabsContent value="register">
            <RegisterForm
              onSwitchToLogin={handleSwitchToLogin}
              onRegisterSuccess={handleAuthSuccess}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
