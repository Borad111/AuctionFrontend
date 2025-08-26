"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerInputDto, registerSchema } from "../schemas/authSchema";
import { useForm } from "react-hook-form";

type Props = {
  onSubmit: (data: registerInputDto,reset :()=>void) => void;
  isLoading: boolean;
};

export function Auth({ onSubmit=()=>{}, isLoading }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<registerInputDto>({
    resolver: zodResolver(registerSchema),
  });


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br p-4">
      <div className="w-full max-w-md">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-2 rounded-xl bg-white shadow-md">
            <TabsTrigger
              value="account"
              className="rounded-xl data-[state=active]:bg-gray-100"
            >
              Register
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className="rounded-xl data-[state=active]:bg-gray-100"
            >
              Login
            </TabsTrigger>
          </TabsList>

          {/* Register Tab */}
          <TabsContent value="account">
            <Card className="mt-4 rounded-2xl shadow-lg border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Create Account
                </CardTitle>
                <CardDescription>
                  Sign up to get started with your account.
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit((data) => onSubmit(data,reset))}>
                <CardContent className="grid gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="tabs-demo-username">Username</Label>
                    <Input
                      placeholder="@peduarte"
                      required
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="tabs-demo-email">Email</Label>
                    <Input
                      {...register("email")}
                      placeholder="PedroDuarte@gmail.com"
                      required
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="tabs-demo-password">Password</Label>
                    <Input
                      {...register("password")}
                      type="password"
                      placeholder="******"
                      required
                    />
                    {errors.password && (
                      <p className="text-sm text-red-500">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full rounded-xl flex items-center justify-center gap-2"
                  >
                    {isLoading && (
                      <svg
                        className="animate-spin h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                    )}
                    {isLoading ? "Registering..." : "Register"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>

          {/* Login Tab */}
          <TabsContent value="password">
            <Card className="mt-4 rounded-2xl shadow-lg border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Login</CardTitle>
                <CardDescription>
                  Enter your credentials to access your account.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="tabs-demo-current">Email</Label>
                  <Input
                    id="tabs-demo-current"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="tabs-demo-new">Password</Label>
                  <Input
                    id="tabs-demo-new"
                    type="password"
                    placeholder="********"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full rounded-xl">Login</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
        </Tabs>
      </div>
    </div>
  );
}
