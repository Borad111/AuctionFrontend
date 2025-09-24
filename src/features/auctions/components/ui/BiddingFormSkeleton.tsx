"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function BiddingFormSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Skeleton className="h-5 w-5 rounded bg-gray-200 dark:bg-gray-700" />
          <Skeleton className="h-5 w-32 rounded bg-gray-200 dark:bg-gray-700" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current Bid Info */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Skeleton className="h-4 w-24 rounded bg-gray-200 dark:bg-gray-700" />
            <Skeleton className="h-6 w-20 rounded bg-gray-200 dark:bg-gray-700" />
          </div>
          <div className="flex items-center justify-between">
            <Skeleton className="h-4 w-24 rounded bg-gray-200 dark:bg-gray-700" />
            <Skeleton className="h-5 w-16 rounded bg-gray-200 dark:bg-gray-700" />
          </div>
          <div className="flex items-center justify-between">
            <Skeleton className="h-4 w-28 rounded bg-gray-200 dark:bg-gray-700" />
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-16 rounded bg-gray-200 dark:bg-gray-700" />
              <Skeleton className="h-5 w-12 rounded-full bg-gray-200 dark:bg-gray-700" />
            </div>
          </div>
        </div>

        {/* Reserve Alert */}
        <div className="flex gap-2">
          <Skeleton className="h-4 w-4 rounded-full bg-gray-200 dark:bg-gray-700" />
          <Skeleton className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
        </div>

        {/* Bidding Form */}
        <div className="space-y-4">
          {/* Input */}
          <div>
            <Skeleton className="h-4 w-24 mb-2 rounded bg-gray-200 dark:bg-gray-700" />
            <Skeleton className="h-10 w-full rounded bg-gray-200 dark:bg-gray-700" />
          </div>

          {/* Quick Bid Buttons */}
          <div>
            <Skeleton className="h-4 w-20 mb-2 rounded bg-gray-200 dark:bg-gray-700" />
            <div className="grid grid-cols-2 gap-2 mt-2">
              <Skeleton className="h-8 w-full rounded bg-gray-200 dark:bg-gray-700" />
              <Skeleton className="h-8 w-full rounded bg-gray-200 dark:bg-gray-700" />
              <Skeleton className="h-8 w-full rounded bg-gray-200 dark:bg-gray-700" />
              <Skeleton className="h-8 w-full rounded bg-gray-200 dark:bg-gray-700" />
            </div>
          </div>

          {/* Submit Button */}
          <Skeleton className="h-10 w-full rounded bg-gray-200 dark:bg-gray-700" />
        </div>

        {/* Bidding Tips */}
        <div className="space-y-1">
          <Skeleton className="h-3 w-3/4 rounded bg-gray-200 dark:bg-gray-700" />
          <Skeleton className="h-3 w-2/3 rounded bg-gray-200 dark:bg-gray-700" />
          <Skeleton className="h-3 w-4/5 rounded bg-gray-200 dark:bg-gray-700" />
        </div>
      </CardContent>
    </Card>
  )
}
