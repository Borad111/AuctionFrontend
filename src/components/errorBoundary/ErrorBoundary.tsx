"use client";
import React from "react";
import * as Sentry from "@sentry/nextjs";

type Props = { children: React.ReactNode };
type State = { hasError: boolean };

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    // Next render me fallback UI show karega
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // 🔴 Sentry ya console me error log karna
    console.error("Error Boundary Caught:", error, errorInfo);
    Sentry.captureException(error, {
      extra: { ...errorInfo }, // ✅ ab object key-value map ban gaya
    });
  }

  render() {
    if (this.state.hasError) {
      // ✅ Fallback UI
      return (
        <div className="flex h-screen items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600">
              Something went wrong
            </h1>
            <p className="text-gray-600 mt-2">
              Please refresh the page or try again later.
            </p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
