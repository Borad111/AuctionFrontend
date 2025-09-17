"use client";

import React from "react";

interface StateHandlerProps {
  loading: boolean;
  error: string | null;
  loadingFallback: React.ReactNode;
  children: React.ReactNode;
}

export function StateHandler({ loading, error, loadingFallback, children }: StateHandlerProps) {
  if (loading) return <>{loadingFallback}</>;
  if (error) {
    return (
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="text-center text-red-500">Error: {error}</div>
        </div>
      </section>
    );
  }
  return <>{children}</>;
}
