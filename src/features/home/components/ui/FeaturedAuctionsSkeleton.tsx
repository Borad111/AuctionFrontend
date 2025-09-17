"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function FeaturedAuctionsSkeleton() {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Skeleton className="h-8 w-48 mb-2 bg-gray-200 dark:bg-gray-700" />
            <Skeleton className="h-4 w-72 bg-gray-200 dark:bg-gray-700" />
          </div>
          <Skeleton className="h-10 w-28 rounded-md bg-gray-200 dark:bg-gray-700" />
        </div>

        {/* Auction Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="border rounded-lg overflow-hidden shadow-sm"
            >
              {/* Image */}
              <Skeleton className="aspect-square w-full bg-gray-200 dark:bg-gray-700" />

              <div className="p-4 space-y-3">
                {/* Category */}
                <Skeleton className="h-4 w-16 rounded-full bg-gray-200 dark:bg-gray-700" />
                {/* Title */}
                <Skeleton className="h-5 w-40 bg-gray-200 dark:bg-gray-700" />
                {/* Time + Watchers */}
                <div className="flex items-center justify-between">
                  <Skeleton className="h-4 w-20 bg-gray-200 dark:bg-gray-700" />
                  <Skeleton className="h-4 w-10 bg-gray-200 dark:bg-gray-700" />
                </div>
                {/* Current Bid */}
                <div>
                  <Skeleton className="h-4 w-24 mb-1 bg-gray-200 dark:bg-gray-700" />
                  <Skeleton className="h-6 w-28 bg-gray-200 dark:bg-gray-700" />
                </div>
              </div>

              {/* Button */}
              <div className="p-4 pt-0">
                <Skeleton className="h-10 w-full rounded-md bg-gray-200 dark:bg-gray-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
