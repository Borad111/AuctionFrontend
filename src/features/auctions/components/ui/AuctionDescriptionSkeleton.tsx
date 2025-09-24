"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function SkeletonBox({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse rounded-md bg-gray-200 dark:bg-gray-700 ${className}`} />
  )
}

export function AuctionDescriptionSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <SkeletonBox className="h-5 w-32 mb-4" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {Array.from({ length: 5 }).map((_, idx) => (
          <SkeletonBox key={idx} className="h-3 w-full" />
        ))}
      </CardContent>
    </Card>
  )
}
