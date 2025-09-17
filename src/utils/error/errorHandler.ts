  import { toast } from "sonner";
  import { AppError, AuthenticationError, ValidationError } from "./errors";
  import * as Sentry from "@sentry/nextjs";


  const firebaseErrorMessages: Record<string, string> = {
    "auth/email-already-in-use": "This email is already registered. Please login instead.",
    "auth/invalid-email": "Invalid email format. Please enter a valid email.",
    "auth/weak-password": "Password is too weak. Please use at least 6 characters.",
    "auth/invalid-credential": "Invalid email or password.",
    "auth/user-not-found": "No account found with this email.",
    "auth/user-disabled": "This account has been disabled.",
    "auth/too-many-requests": "Too many attempts. Please try again later.",
  };

  export const getErrorMessage = (error: unknown): string => {
    if (typeof error === "object" && error && "code" in error) {
      const code = (error as any).code;
      if (firebaseErrorMessages[code]) return firebaseErrorMessages[code];
    }

    if (error instanceof AppError) return error.message;
    if (error instanceof Error) return error.message;
    if (typeof error === "string") return error;
    return "An unknown error occurred";
  };

  export const getErrorCode = (error: unknown): string => {
    if (error instanceof AppError) return error.code;
    if (typeof error === "object" && error && "code" in error) {
      return (error as any).code;
    }
    return "UNKNOWN_ERROR";
  };

  export const handleError = (error: any, context?: Record<string, any>): never => {
    const errorMessage = getErrorMessage(error);

    // ✅ Show friendly toast
    toast.error(errorMessage);

    // 🔴 Capture error in Sentry if not already captured
    if (!(error as any)._sentryCaptured) {
      Sentry.captureException(error, {
        extra: { errorCode: getErrorCode(error), stack: error?.stack, ...context },
      });
      (error as any)._sentryCaptured = true;
    }

    // ✅ Throw typed error for app-level handling
    if (error?.code?.startsWith("auth/")) throw new AuthenticationError(errorMessage);
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
