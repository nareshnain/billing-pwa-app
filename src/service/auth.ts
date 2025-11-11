// src/service/auth.ts
import axiosInstance from './axios';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  token?: string;
  accessToken?: string;
  userId?: number;
  email?: string;
  firstName?: string;
  lastName?: string;
  userRole?: string;
  expiresAtUtc?: string;
  [key: string]: any;
}

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const response = await axiosInstance.post('/Auth/login', payload);
  return response.data;
};
