"use client";

interface SectionFallbackProps {
  message?: string;
  onRetry?: () => void;
}

export default function SectionFallback({
  message = "Failed to load this section.",
  onRetry,
}: SectionFallbackProps) {
  return (
    <div className="text-center p-8">
      <p className="mb-4">{message}</p>
      {onRetry && (
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={onRetry}
        >
          Try Again
        </button>
      )}
    </div>
  );
}
