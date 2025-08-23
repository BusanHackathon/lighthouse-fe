import { BASE_URL } from '@/shared';

export const REFRESH_TOKEN_API_PATH = () => '/api/auth/refresh';

interface RefreshTokenApiRequest {
  refreshToken: string;
}

interface RefreshTokenApiResponse {
  data: {
    message: string;
    newAccessToken: string;
  };
  status: string;
  serverDateTime: string;
  errorCode: string | null;
  errorMessage: string | null;
}

export const refreshTokenApi = async ({
  refreshToken,
}: RefreshTokenApiRequest): Promise<RefreshTokenApiResponse> => {
  // CORS 문제를 우회하기 위해 fetch API 직접 사용
  const response = await fetch(`${BASE_URL}/api/auth/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      refreshToken: refreshToken,
    },
    body: JSON.stringify({ refreshToken }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
};
