// src/utils/errors.ts
export class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number = 500
  ) {
    super(message);
    this.name = "AppError";
  }
}

export class AuthenticationError extends AppError {
  constructor(message: string = "Authentication failed") {
    super(message, "AUTH_ERROR", 401);
  }
}

export class ValidationError extends AppError {
  constructor(message: string = "Validation failed") {
    super(message, "VALIDATION_ERROR", 400);
  }
}