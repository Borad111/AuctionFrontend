"use client";
import React from "react";
import { useRegister } from "../hooks/useAuth";
import { toast } from "sonner";
import { Auth } from "../components/Auth";
import { registerInputDto } from "../schemas/authSchema";

function AuthContainer() {
  const { registerHandler, isLoading } = useRegister();
  const handleRegisterSubmit = async (
    data: registerInputDto,
    reset: () => void
  ) => {
    try {
      const result = await registerHandler(data);
      toast.success(result.message || "Registration successful");
      reset();
      console.log(result);
    } catch (error: any) {
      toast.error(error?.data?.message || "Registration failed");
      console.log(error);
    }
  };
  return <Auth onSubmit={handleRegisterSubmit} isLoading={isLoading} />;
}

export default AuthContainer;
