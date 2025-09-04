"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginInputDto } from "../schemas/authSchema";
import { useLogin } from "../hooks/useLogin";

interface LoginFormProps {
  onSwitchToRegister: () => void;
  // onLoginSuccess?: () => void;
}

export function LoginForm({ onSwitchToRegister }: LoginFormProps) {
  const { loginHandler, isLoading } = useLogin();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginInputDto>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginInputDto) => {
    try {
      await loginHandler(data.email, data.password);
      reset();
      // onLoginSuccess?.();
    } catch (error) {
      // Error is already handled in the hook
    }
  };

  return (
    <Card className="mt-4 rounded-2xl shadow-lg border border-gray-200">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Login</CardTitle>
        <CardDescription>Enter your credentials to access your account.</CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="grid gap-6">
          {/* Email */}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              type="email" 
              placeholder="your@email.com" 
              {...register("email")}
              className={errors.email ? "border-red-500" : ""}
              disabled={isLoading}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className="grid gap-2 relative">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                {...register("password")}
                className={errors.password ? "border-red-500" : ""}
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-2 top-2 text-sm text-gray-600 hover:text-gray-800"
                disabled={isLoading}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-xl"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </Button>
          
          <div className="text-center text-sm">
            <span className="text-gray-600">Don't have an account? </span>
            <button
              type="button"
              onClick={onSwitchToRegister}
              className="text-blue-600 hover:underline font-medium"
              disabled={isLoading}
            >
              Sign up
            </button>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}