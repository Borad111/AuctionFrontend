// src/utils/error/errorHandler.ts
import { toast } from "sonner";
import { AppError, AuthenticationError, ValidationError } from "./errors";
import * as Sentry from "@sentry/nextjs";
import { ZodError } from "zod";

/* your firebase mapping (keep as you had) */
const firebaseErrorMessages: Record<string, string> = {
  "auth/email-already-in-use": "This email is already registered. Please login instead.",
  "auth/invalid-email": "Invalid email format. Please enter a valid email.",
  "auth/weak-password": "Password is too weak. Please use at least 6 characters.",
  "auth/invalid-credential": "Invalid email or password.",
  "auth/user-not-found": "No account found with this email.",
  "auth/user-disabled": "This account has been disabled.",
  "auth/too-many-requests": "Too many attempts. Please try again later.",
};

/**
 * Map many possible error shapes (RTK Query FetchBaseQueryError,
 * ZodError, native TypeError from fetch, firebase codes) to a friendly string.
 */
export const mapApiErrorToMessage = (error: unknown): string => {
   if (error instanceof ValidationError) {
    return error.message || "Invalid data received.";
  }
  if (typeof error === "object" && error !== null) {
    const anyErr = error as any;

    // RTK Query FetchBaseQueryError shape: { status, data?, error? }
    if ("status" in anyErr) {
      const status = anyErr.status;
      // network / fetch failed
      if (status === "FETCH_ERROR" || status === "TIMEOUT_ERROR") {
        return "Server unreachable. Please check your connection.";
      }
      if (status === "PARSING_ERROR") {
        return "Invalid data received.";
      }
      if (typeof status === "number") {
        if (status === 404) return "Requested resource not found.";
        if (status >= 500) return "Server error. Please try again later.";
        if (status === 401 || status === 403) return "Authentication failed. Please login.";
      }
      // fallback to server provided message
      if (anyErr?.data?.message) return String(anyErr.data.message);
      if (typeof anyErr.error === "string") return anyErr.error;
    }

    // Zod parse error (thrown in transformResponse)
    if (anyErr instanceof ZodError || anyErr?.name === "ZodError") {
      return "Invalid data received.";
    }

    // native fetch/TypeError messages like "Failed to fetch"
    if (typeof anyErr.message === "string") {
      const m = anyErr.message.toLowerCase();
      if (
        m.includes("failed to fetch") ||
        m.includes("networkerror") ||
        m.includes("network request failed") ||
        m.includes("network error")
      ) {
        return "Server unreachable. Please check your connection.";
      }
    }

    // firebase-style codes
    if ("code" in anyErr && typeof anyErr.code === "string" && firebaseErrorMessages[anyErr.code]) {
      return firebaseErrorMessages[anyErr.code];
    }

    // generic Error message
    if (anyErr instanceof Error) return anyErr.message;
  }

  if (typeof error === "string") return error;
  return "An unexpected error occurred.";
};

/* existing helpers (slightly wired to use the mapper) */
export const getErrorMessage = (error: unknown): string => {
  return mapApiErrorToMessage(error);
};

export const getErrorCode = (error: unknown): string => {
  if (error instanceof AppError) return error.code;
  if (typeof error === "object" && error && "code" in error) {
    return (error as any).code;
  }
  return "UNKNOWN_ERROR";
};

export const handleError = (error: any, context?: Record<string, any>, showToast = true) => {
  const errorMessage = getErrorMessage(error);

  // Show friendly toast only if enabled
  if (showToast) {
    toast.error(errorMessage);
  }

  // Capture in Sentry (avoid double-capture by flag)
  if (!(error as any)._sentryCaptured) {
    Sentry.captureException(error, {
      extra: { errorCode: getErrorCode(error), stack: error?.stack, ...context },
    });
    (error as any)._sentryCaptured = true;
  }

  // Throw typed errors for app-level handling
  if (error?.code?.startsWith && error?.code?.startsWith("auth/")) throw new AuthenticationError(errorMessage);
  if (error instanceof ValidationError) throw error;
  throw new AppError(errorMessage, getErrorCode(error), 500);
};

export const addBreadcrumb = (message: string, category: string = "action") => {
  Sentry.addBreadcrumb({
    category,
    message,
    level: "info",
  });
};
