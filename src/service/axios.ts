// src/service/axios.ts
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://localhost:7253';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
