import { fetchInstance } from '@/shared';

export const REFRESH_TOKEN_API_PATH = '/api/auth/refresh';

interface RefreshTokenApiRequest {
  refreshToken: string;
}

interface RefreshTokenApiResponse {
  accessToken: string;
}

export const refreshTokenApi = async ({
  refreshToken,
}: RefreshTokenApiRequest): Promise<RefreshTokenApiResponse> => {
  const response = await fetchInstance.post<RefreshTokenApiResponse>(REFRESH_TOKEN_API_PATH, {
    refreshToken,
  });

  console.log(response.data);
  localStorage.setItem('refreshToken', response.data.accessToken);

  return response.data;
};
