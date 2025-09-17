export interface ApiError {
  data?: {
    message: string;
    code: number;
  };
  status: number;
}