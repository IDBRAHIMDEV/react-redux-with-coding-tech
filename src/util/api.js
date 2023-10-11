// utils/api.js
import axios from 'axios';
import { getToken } from './storage';

const baseURL = "https://dummyjson.com/auth"

const api = axios.create({
  baseURL
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;