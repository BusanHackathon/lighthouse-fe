import { fetchInstance } from '@/shared';

export const REFRESH_TOKEN_API_PATH = '/api/auth/refresh';

interface RefreshTokenApiRequest {
  refreshToken: string;
}

interface RefreshTokenApiResponse {
  newAccessToken: string;
}

export const refreshTokenApi = async ({
  refreshToken,
}: RefreshTokenApiRequest): Promise<RefreshTokenApiResponse> => {
  const response = await fetchInstance.post<RefreshTokenApiResponse>(REFRESH_TOKEN_API_PATH, {
    params: {
      refreshToken,
    },
  });

  return response.data;
};
