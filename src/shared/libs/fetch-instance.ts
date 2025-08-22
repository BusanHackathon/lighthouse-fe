import { toast } from 'sonner';

import { authStorage } from '../utils';

import { initInstance } from './axios-instance';

export const BASE_URL = 'http://43.200.101.253';
// export const BASE_URL = 'http://localhost:8080';

export const fetchInstance = initInstance({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

fetchInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error),
);

fetchInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 500 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = authStorage.refreshToken.get();

      if (!refreshToken) {
        return Promise.reject(error);
      }

      const response = await fetch(`${BASE_URL}/api/auth/refresh`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken }),
      });

      if (response.ok) {
        console.log('refreshToken success');
        toast.success('재인증 성공!');
        const data = await response.json();

        authStorage.refreshToken.set(data.refreshToken);
        authStorage.accessToken.set(data.accessToken);

        return fetchInstance(originalRequest);
      } else if (response.status === 401) {
        console.log('refreshToken failed');
        toast.error('재인증 실패!');

        authStorage.refreshToken.set('');
        authStorage.accessToken.set('');

        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);
