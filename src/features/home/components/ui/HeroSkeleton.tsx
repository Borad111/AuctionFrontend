"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function HeroSkeleton() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 lg:py-32">
      <div className="container px-4 mx-auto text-center">
        
        {/* Heading */}
        <Skeleton className="h-12 w-3/4 lg:w-1/2 mx-auto mb-6 bg-gray-200 dark:bg-gray-700" />

        {/* Subheading */}
        <Skeleton className="h-6 w-2/3 lg:w-1/3 mx-auto mb-8 bg-gray-200 dark:bg-gray-700" />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Skeleton className="h-12 w-40 rounded-lg bg-gray-200 dark:bg-gray-700" />
          <Skeleton className="h-12 w-44 rounded-lg bg-gray-200 dark:bg-gray-700" />
        </div>
      </div>
    </section>
  );
}
