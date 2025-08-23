import { fetchInstance } from '@/shared';

export const REFRESH_TOKEN_API_PATH = () => '/api/auth/refresh';

interface RefreshTokenApiRequest {
  refreshToken: string;
}

interface RefreshTokenApiData {
  message: string;
  newAccessToken: string;
}

interface RefreshTokenApiResponse {
  data: RefreshTokenApiData;
  status: string;
  serverDateTime: string;
  errorCode: string | null;
  errorMessage: string | null;
}

export const refreshTokenApi = async ({
  refreshToken,
}: RefreshTokenApiRequest): Promise<RefreshTokenApiResponse> => {
  const response = await fetchInstance.post<RefreshTokenApiResponse>(REFRESH_TOKEN_API_PATH(), {
    refreshToken,
  });

  return response.data;
};
