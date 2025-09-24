"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function CountdownTimerSkeleton() {
  return (
    <Card>
      <CardContent className="p-6">
        {/* Header with Icon + Title */}
        <div className="flex items-center gap-2 mb-4">
          <Skeleton className="h-5 w-5 rounded-full bg-gray-200 dark:bg-gray-700" />
          <Skeleton className="h-5 w-32 rounded-md bg-gray-200 dark:bg-gray-700" />
        </div>

        {/* Time Blocks */}
        <div className="grid grid-cols-4 gap-4 text-center">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-7 w-12 mx-auto rounded-md bg-gray-200 dark:bg-gray-700" />
              <Skeleton className="h-3 w-10 mx-auto rounded bg-gray-200 dark:bg-gray-700" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
