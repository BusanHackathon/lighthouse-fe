import { initInstance } from './axios-instance';

export const BASE_URL = 'http://43.200.101.253';

export const fetchInstance = initInstance({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
