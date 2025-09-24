"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function SkeletonBox({ className }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-md bg-gray-200 dark:bg-gray-700 ${className}`}
    />
  )
}

export function AuctionSellerInfoSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">
          <SkeletonBox className="h-4 w-32" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Seller */}
        <div className="flex items-center justify-between">
          <SkeletonBox className="h-3 w-16" />
          <SkeletonBox className="h-3 w-20" />
        </div>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <SkeletonBox className="h-3 w-16" />
          <div className="flex items-center gap-2">
            <SkeletonBox className="h-3 w-6" />
            <SkeletonBox className="h-3 w-16" />
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center justify-between">
          <SkeletonBox className="h-3 w-16" />
          <div className="flex items-center gap-2">
            <SkeletonBox className="h-3 w-3 rounded-full" />
            <SkeletonBox className="h-3 w-20" />
          </div>
        </div>

        {/* Shipping */}
        <div className="flex items-center justify-between">
          <SkeletonBox className="h-3 w-16" />
          <div className="flex items-center gap-2">
            <SkeletonBox className="h-3 w-3 rounded-full" />
            <SkeletonBox className="h-3 w-20" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
