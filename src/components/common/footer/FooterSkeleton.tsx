"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function FooterSkeleton() {
  return (
    <footer className="bg-muted/50 border-t py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Skeleton className="h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-700" />
              <Skeleton className="h-6 w-24 bg-gray-200 dark:bg-gray-700" />
            </div>
            <Skeleton className="h-4 w-48 mb-2 bg-gray-200 dark:bg-gray-700" />
            <Skeleton className="h-4 w-40 bg-gray-200 dark:bg-gray-700" />
          </div>

          {/* Quick Links */}
          <div>
            <Skeleton className="h-5 w-28 mb-4 bg-gray-200 dark:bg-gray-700" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-32 bg-gray-200 dark:bg-gray-700" />
              <Skeleton className="h-4 w-28 bg-gray-200 dark:bg-gray-700" />
              <Skeleton className="h-4 w-36 bg-gray-200 dark:bg-gray-700" />
              <Skeleton className="h-4 w-24 bg-gray-200 dark:bg-gray-700" />
            </div>
          </div>

          {/* Support */}
          <div>
            <Skeleton className="h-5 w-24 mb-4 bg-gray-200 dark:bg-gray-700" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-28 bg-gray-200 dark:bg-gray-700" />
              <Skeleton className="h-4 w-32 bg-gray-200 dark:bg-gray-700" />
              <Skeleton className="h-4 w-40 bg-gray-200 dark:bg-gray-700" />
              <Skeleton className="h-4 w-36 bg-gray-200 dark:bg-gray-700" />
            </div>
          </div>

          {/* Connect */}
          <div>
            <Skeleton className="h-5 w-20 mb-4 bg-gray-200 dark:bg-gray-700" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-28 bg-gray-200 dark:bg-gray-700" />
              <Skeleton className="h-4 w-32 bg-gray-200 dark:bg-gray-700" />
              <Skeleton className="h-4 w-28 bg-gray-200 dark:bg-gray-700" />
              <Skeleton className="h-4 w-36 bg-gray-200 dark:bg-gray-700" />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t mt-8 pt-8 text-center">
          <Skeleton className="h-4 w-48 mx-auto bg-gray-200 dark:bg-gray-700" />
        </div>
      </div>
    </footer>
  );
}
