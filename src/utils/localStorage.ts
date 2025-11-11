// src/utils/localStorage.ts

import type { LoginResponse } from "../service/auth";

export const setUserToken = (token: string) => {
  localStorage.setItem('token', token);
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const removeToken = () => {
  localStorage.removeItem('token');
};

export const setUserInfo = (userInfo: LoginResponse) => {
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
};

export const getUserInfo = (): Record<string, any> | null => {
  const userInfo = localStorage.getItem('userInfo');
  return userInfo ? JSON.parse(userInfo) : null;
};

export const removeUserInfo = () => {
  localStorage.removeItem('userInfo');
};
