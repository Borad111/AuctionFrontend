"use client"
import { Card, CardContent } from "@/components/ui/card"

function SkeletonBox({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse rounded-md bg-gray-200 dark:bg-gray-700 ${className}`} />
  )
}

export function AuctionTrustIndicatorsSkeleton() {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-1">
            <SkeletonBox className="h-4 w-4" />
            <SkeletonBox className="h-3 w-24" />
          </div>
          <div className="flex items-center gap-1">
            <SkeletonBox className="h-4 w-4" />
            <SkeletonBox className="h-3 w-24" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
