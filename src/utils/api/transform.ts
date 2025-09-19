// src/utils/api/handleTransformError.ts
import { ZodError } from "zod";
import { AppError, ValidationError } from "../error/errors";

/**
 * Reusable transformErrorResponse function for RTK Query.
 * Exactly same logic as your current working code.
 */
export const handleTransformError = (err: unknown) => {
  // Agar ZodError hua
  if (err instanceof ZodError) {
    return new ValidationError("Invalid data received.");
  }
  // Agar already AppError/ValidationError hai to pass through
  if (err instanceof ValidationError || err instanceof AppError) {
    return err;
  }

  // Else fallback
  return err;
};
