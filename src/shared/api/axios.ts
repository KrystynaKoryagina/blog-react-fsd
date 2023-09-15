import axios, { InternalAxiosRequestConfig } from 'axios';
import { AUTH_TOKEN } from '@/shared/constants/localStorage';

export const $axiosApi = axios.create({
  baseURL: __API__,
});

$axiosApi.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (config?.headers) {
      config.headers.Authorization = localStorage.getItem(AUTH_TOKEN);
    }

    return config;
  },
  (error) => Promise.reject(error),
);
