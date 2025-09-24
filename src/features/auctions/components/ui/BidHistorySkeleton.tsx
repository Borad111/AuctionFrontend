"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function BidHistorySkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="h-5 w-32 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
          <div className="h-5 w-12 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse"
            >
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-600 animate-pulse"></div>
                <div className="space-y-1">
                  <div className="h-3 w-24 rounded-md bg-gray-300 dark:bg-gray-600 animate-pulse"></div>
                  <div className="h-2 w-16 rounded-md bg-gray-300 dark:bg-gray-600 animate-pulse"></div>
                </div>
              </div>
              <div className="h-3 w-12 rounded-md bg-gray-300 dark:bg-gray-600 animate-pulse"></div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
