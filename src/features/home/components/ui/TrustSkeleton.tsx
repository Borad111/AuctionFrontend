"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function TrustSkeleton() {
  return (
    <section className="py-12 border-b">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Item 1 */}
          <div className="flex flex-col items-center">
            {/* Icon */}
            <Skeleton className="h-12 w-12 rounded-full mb-4 bg-gray-200 dark:bg-gray-700" />
            {/* Number */}
            <Skeleton className="h-6 w-20 mb-2 bg-gray-200 dark:bg-gray-700" />
            {/* Text */}
            <Skeleton className="h-4 w-32 bg-gray-200 dark:bg-gray-700" />
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center">
            <Skeleton className="h-12 w-12 rounded-full mb-4 bg-gray-200 dark:bg-gray-700" />
            <Skeleton className="h-6 w-20 mb-2 bg-gray-200 dark:bg-gray-700" />
            <Skeleton className="h-4 w-32 bg-gray-200 dark:bg-gray-700" />
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center">
            <Skeleton className="h-12 w-12 rounded-full mb-4 bg-gray-200 dark:bg-gray-700" />
            <Skeleton className="h-6 w-20 mb-2 bg-gray-200 dark:bg-gray-700" />
            <Skeleton className="h-4 w-32 bg-gray-200 dark:bg-gray-700" />
          </div>
        </div>
      </div>
    </section>
  );
}
