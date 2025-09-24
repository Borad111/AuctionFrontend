"use client"

import { Skeleton } from "@/components/ui/skeleton"

export function AuctionHeaderSkeleton() {
  return (
    <div>
      {/* Title (2 lines) + Action Buttons */}
      <div className="flex items-start justify-between mb-2">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-6 w-60 rounded-md bg-gray-200 dark:bg-gray-700" />
          <Skeleton className="h-6 w-40 rounded-md bg-gray-200 dark:bg-gray-700" />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <Skeleton className="h-9 w-9 rounded-md bg-gray-200 dark:bg-gray-700" />
          <Skeleton className="h-9 w-9 rounded-md bg-gray-200 dark:bg-gray-700" />
          <Skeleton className="h-9 w-9 rounded-md bg-gray-200 dark:bg-gray-700" />
        </div>
      </div>

      {/* Metadata (watchers + badges) */}
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        {/* Watchers */}
        <div className="flex items-center gap-1">
          <Skeleton className="h-4 w-4 rounded-full bg-gray-200 dark:bg-gray-700" />
          <Skeleton className="h-4 w-20 rounded-md bg-gray-200 dark:bg-gray-700" />
        </div>

        {/* Condition Badge */}
        <Skeleton className="h-5 w-16 rounded-full bg-gray-200 dark:bg-gray-700" />

        {/* Status Badge */}
        <Skeleton className="h-5 w-14 rounded-full bg-gray-200 dark:bg-gray-700" />
      </div>
    </div>
  )
}
