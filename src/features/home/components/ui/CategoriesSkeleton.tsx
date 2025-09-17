"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function CategoriesSkeleton() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <Skeleton className="h-8 w-56 mx-auto mb-4 bg-gray-200 dark:bg-gray-700" />
          <Skeleton className="h-4 w-96 mx-auto bg-gray-200 dark:bg-gray-700" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="border rounded-lg p-6 text-center flex flex-col items-center"
            >
              {/* Icon circle */}
              <Skeleton className="h-12 w-12 rounded-full mb-4 bg-gray-200 dark:bg-gray-700" />
              {/* Title */}
              <Skeleton className="h-5 w-24 mb-2 bg-gray-200 dark:bg-gray-700" />
              {/* Count */}
              <Skeleton className="h-4 w-20 bg-gray-200 dark:bg-gray-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
