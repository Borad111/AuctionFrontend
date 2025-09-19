"use client";
import { ErrorBoundary } from "react-error-boundary";
import SectionFallback from "./SectionFallback";

export function SectionBoundary({
  children,
  message,
}: {
  children: React.ReactNode;
  message?: string;
}) {
  return (  
    <ErrorBoundary
  fallbackRender={({ resetErrorBoundary }) => (
    <SectionFallback
      message={message}
      onRetry={resetErrorBoundary} // 👈 boundary ko reset karega
    />
  )}
>
  {children}
</ErrorBoundary>

  );
}
