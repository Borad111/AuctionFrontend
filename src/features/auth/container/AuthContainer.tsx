"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import dynamic from "next/dynamic";
import { AuthSkeleton } from "../components/AuthSkeleton";

const LoginForm = dynamic(
  () =>
    import("@/features/auth/components/LoginForm").then(
      (mod) => mod.LoginForm // 👈 yaha default export ya named export specify karo
    ),
  {
    loading: () => <AuthSkeleton/>,
    ssr: false,
  }
);

const RegisterForm=dynamic(()=>
  import("@/features/auth/components/RegisterForm").then(
    (mod)=>mod.RegisterForm
  )  ,
  {
    loading: () =><AuthSkeleton/>,
    ssr: false,
  }
)
export function AuthContainer() {
  const [activeTab, setActiveTab] = useState("login");
  const router = useRouter();

  const user = useSelector((state: RootState) => state.auth.user);


  const handleSwitchToRegister = () => setActiveTab("register");
  const handleSwitchToLogin = () => setActiveTab("login");


  if (user) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br  p-4">
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
            />
          </TabsContent>

          <TabsContent value="register">
            <RegisterForm
              onSwitchToLogin={handleSwitchToLogin}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
