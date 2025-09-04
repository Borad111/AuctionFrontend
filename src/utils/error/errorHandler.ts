import { toast } from "sonner";
import { AppError, AuthenticationError, ValidationError } from "./errors";

// ✅ Extract error message
export const getErrorMessage = (error: unknown): string => {
  if (error instanceof AppError) return error.message;
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "An unknown error occurred";
};

// ✅ Extract error code
export const getErrorCode = (error: unknown): string => {
  if (error instanceof AppError) return error.code;
  return "UNKNOWN_ERROR";
};

// ✅ Centralized handler for UI (Toast + Throw)
export const handleError = (error: any): never => {
  const errorMessage = getErrorMessage(error);

  // Firebase specific errors
  switch (error?.code) {
    case "auth/invalid-credential":
      toast.error("Invalid credentials provided");
      throw new AuthenticationError("Invalid credentials provided");

    case "auth/too-many-requests":
      toast.error("Too many login attempts. Please try again later.");
      throw new AuthenticationError("Too many login attempts. Please try again later.");

    case "auth/user-not-found":
      toast.error("No user found with this email.");
      throw new AuthenticationError("No user found with this email.");

    case "auth/user-disabled":
      toast.error("This user account has been disabled.");
      throw new AuthenticationError("This user account has been disabled.");
  }

  // Backend Validation errors (custom example)
  if (error instanceof ValidationError) {
    toast.error(error.message);
    throw error;
  }

  // Default handler
  toast.error(errorMessage || "Something went wrong");
  throw new AppError(errorMessage || "Something went wrong", "UNKNOWN_ERROR", 500);
};
