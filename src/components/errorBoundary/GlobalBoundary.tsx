"use client";
import { ErrorBoundary } from "react-error-boundary";
import * as Sentry from "@sentry/nextjs";

function GlobalFallback({ error, resetErrorBoundary }: any) {
  // 🔴 Capture error in Sentry
  Sentry.captureException(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50">
      <h1 className="text-2xl font-bold text-red-700 mb-2">
        Oops! Something went wrong.
      </h1>
      <p className="text-gray-600 mb-4">
        The home page failed to load. Please try again.
      </p>
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-2 bg-blue-600 text-white rounded"
      >
        Retry
      </button>
    </div>
  );
}

export function GlobalBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary
      FallbackComponent={GlobalFallback}
      onError={(error) => {
        // Optional: custom logging
        console.error("GlobalBoundary error:", error);
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
