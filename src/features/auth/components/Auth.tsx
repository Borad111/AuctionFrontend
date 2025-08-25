"use client";
import { AppWindowIcon, CodeIcon } from "lucide-react";
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
import { useRegisterUserMutation } from "../api/authApi";

export function Auth() {
  const [registerUser, { isLoading, isError, isSuccess }] =
    useRegisterUserMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<registerInputDto>({
    resolver: zodResolver(registerSchema),
  });

  const handleRegisterSubmit = (data: registerInputDto) => {
    try {
      const result = registerUser(data);
      console.log(result);
      if (isSuccess) {
        console.log("User registered successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
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
              <form onSubmit={handleSubmit(handleRegisterSubmit)}>
                <CardContent className="grid gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="tabs-demo-username">Username</Label>
                    <Input placeholder="@peduarte" {...register("name")} />
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
                    disabled={isSubmitting}
                    className="w-full rounded-xl"
                  >
                    {isLoading ? "Registering ..." : "Register"}
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
