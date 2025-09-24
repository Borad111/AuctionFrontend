"use client"

import { Skeleton } from "@/components/ui/skeleton"

export function AuctionBreadcrumbSkeleton() {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
      {/* Back link placeholder */}
      <div className="flex items-center gap-1">
        <Skeleton className="w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-700" /> {/* Arrow icon */}
        <Skeleton className="w-20 h-4 rounded-md bg-gray-200 dark:bg-gray-700" />  {/* Back text */}
      </div>

      <span>/</span>
      <Skeleton className="w-16 h-4 rounded-md bg-gray-200 dark:bg-gray-700" /> {/* Category */}
      <span>/</span>
      <Skeleton className="w-32 h-4 rounded-md bg-gray-200 dark:bg-gray-700" /> {/* Title */}
    </div>
  )
}
