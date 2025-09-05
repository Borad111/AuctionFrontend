export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
}


export interface RegisterInput {
  name: string;
  email: string;
  password: string;
  role?: "ADMIN" | "BIDDER" | "SELLER" | "USER";
}

// 👇 Ye backend ke liye hai (without password, with uid)
export interface RegisterRequest {
  id: string;
  name: string;
  email: string;
  role?: "ADMIN" | "BIDDER" | "SELLER" | "USER";
}
export interface RegisterResponse {
  success: boolean;
  message: string;
  user: User;
}

export interface LoginRequest {
  idToken: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  user: User;
  accessToken: string;
}


export interface UserResponse{
  success:boolean,
  user:User  
}