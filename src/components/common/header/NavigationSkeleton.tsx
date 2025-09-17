"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function NavigationSkeleton() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur dark:bg-background/90">
      <div className="mx-auto max-w-[80%] w-full flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Skeleton className="h-6 w-6 rounded bg-gray-200 dark:bg-gray-700" />
          <Skeleton className="h-6 w-24 bg-gray-200 dark:bg-gray-700" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton
              key={i}
              className="h-4 w-16 bg-gray-200 dark:bg-gray-700"
            />
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Skeleton className="h-9 w-20 rounded-md bg-gray-200 dark:bg-gray-700" />
          <Skeleton className="h-9 w-24 rounded-md bg-gray-200 dark:bg-gray-700" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Skeleton className="h-8 w-8 rounded-md bg-gray-200 dark:bg-gray-700" />
        </div>
      </div>
    </header>
  );
}
