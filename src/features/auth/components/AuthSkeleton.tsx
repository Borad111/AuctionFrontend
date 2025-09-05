"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function AuthSkeleton() {
  return (
    <Card className="mt-4 rounded-2xl shadow-lg border border-gray-200">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          <Skeleton className="h-6 w-24" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="h-4 w-48 mt-2" />
        </CardDescription>
      </CardHeader>

      <CardContent className="grid gap-6">
        {/* Email */}
        <div className="grid gap-2">
          <Skeleton className="h-4 w-16" /> {/* Label */}
          <Skeleton className="h-10 w-full rounded-md" /> {/* Input */}
        </div>

        {/* Password */}
        <div className="grid gap-2">
          <Skeleton className="h-4 w-20" /> {/* Label */}
          <Skeleton className="h-10 w-full rounded-md" /> {/* Input */}
        </div>

        {/* Button */}
        <Skeleton className="h-10 w-full rounded-xl" />
      </CardContent>
    </Card>
  );
}
