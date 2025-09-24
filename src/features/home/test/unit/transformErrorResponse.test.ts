import { ZodError } from "zod";
import { ValidationError } from "@/utils/error/errors";
import { handleTransformError } from "@/utils/api/transform";

describe("transformErrorResponse", () => {
  it("should map ZodError to ValidationError", () => {
    const err = new ZodError([]);
    const result = handleTransformError(err) as ValidationError;
    expect(result.message).toBe("Invalid data received.");
  });

  it("should pass through ValidationError", () => {
    const validationError = new ValidationError("Invalid data received.");
    const result = handleTransformError(validationError);
    expect(result).toBe(validationError);
  });

  it("should return raw error for unknown error", () => {
    const err = new Error("Unknown error");
    const result = handleTransformError(err);
    expect(result).toBe(err);
  });
});

