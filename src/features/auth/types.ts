// Request ke liye
export interface registerRequest {
  name: string;
  email: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
}
// Response ke liye
export interface registerResponse {
  success: boolean;
  message: string;
  user: User;
}
