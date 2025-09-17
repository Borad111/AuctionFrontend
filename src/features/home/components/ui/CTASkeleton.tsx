"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function CTASkeleton() {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="border rounded-lg p-12 text-center bg-gray-100 dark:bg-gray-800">
          {/* Heading */}
          <Skeleton className="h-8 w-64 mx-auto mb-4 bg-gray-200 dark:bg-gray-700" />

          {/* Paragraph */}
          <Skeleton className="h-4 w-96 mx-auto mb-8 bg-gray-200 dark:bg-gray-700" />

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Skeleton className="h-12 w-40 bg-gray-200 dark:bg-gray-700" />
            <Skeleton className="h-12 w-40 bg-gray-200 dark:bg-gray-700" />
          </div>
        </div>
      </div>
    </section>
  );
}
