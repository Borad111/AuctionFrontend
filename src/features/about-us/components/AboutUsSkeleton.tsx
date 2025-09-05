"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function AboutUsSkeleton() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">About Us</h2>
      <div className="bg-white shadow rounded-2xl p-4 space-y-4">
        {/* Name */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-16" /> {/* Label */}
          <Skeleton className="h-5 w-40" /> {/* Value */}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-5 w-56" />
        </div>

        {/* Role */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-5 w-24" />
        </div>
      </div>

      {/* Logout button */}
      <div className="mt-6">
        <Skeleton className="h-10 w-24 rounded-xl" />
      </div>
    </div>
  );
}
