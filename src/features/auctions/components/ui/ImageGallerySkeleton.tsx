"use client"

import { Skeleton } from "@/components/ui/skeleton"



export function ImageGallerySkeleton( ) {
    const imagesCount = 5; // Number of thumbnail skeletons to display
  return (
    <div className="space-y-4">
      {/* Main Image Skeleton */}
      <Skeleton className="w-full aspect-square rounded-lg bg-gray-200 dark:bg-gray-700" />

      {/* Navigation Arrows Skeleton */}
      <div className="flex justify-between -mt-16 px-2">
        <Skeleton className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700" /> {/* Left arrow */}
        <Skeleton className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700" /> {/* Right arrow */}
      </div>

      {/* Expand Button Skeleton */}
      <div className="flex justify-end -mt-10 pr-2">
        <Skeleton className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700" />
      </div>

      {/* Image Counter Skeleton */}
      <div className="w-16 h-4 rounded bg-gray-200 dark:bg-gray-700"></div>

      {/* Thumbnail Strip Skeleton */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {Array.from({ length: imagesCount }).map((_, idx) => (
          <Skeleton
            key={idx}
            className="relative w-20 h-20 rounded-md bg-gray-200 dark:bg-gray-700"
          />
        ))}
      </div>
    </div>
  )
}
