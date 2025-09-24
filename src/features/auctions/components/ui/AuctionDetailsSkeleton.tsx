"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AuctionDetailsSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="h-5 w-40 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse" />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {/* Starting Bid */}
          <div className="flex justify-between items-center">
            <div className="h-3 w-20 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
            <div className="h-3 w-16 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
          </div>
          {/* Current Bid */}
          <div className="flex justify-between items-center">
            <div className="h-3 w-20 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
            <div className="h-3 w-16 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
          </div>
          {/* Reserve Price */}
          <div className="flex justify-between items-center">
            <div className="h-3 w-20 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
            <div className="h-3 w-16 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
          </div>
          {/* Total Bids */}
          <div className="flex justify-between items-center">
            <div className="h-3 w-20 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
            <div className="h-3 w-16 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
