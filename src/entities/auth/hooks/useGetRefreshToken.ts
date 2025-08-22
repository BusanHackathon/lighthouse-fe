import { useQuery } from '@tanstack/react-query';

import { authStorage } from '@/shared';

import { REFRESH_TOKEN_API_PATH, refreshTokenApi } from '../apis';

export const GetRefreshTokenQueryKey = [REFRESH_TOKEN_API_PATH];

export const useGetRefreshToken = () => {
  return useQuery({
    queryKey: [GetRefreshTokenQueryKey],
    queryFn: () => refreshTokenApi({ refreshToken: authStorage.refreshToken.get() }),
    enabled: !!authStorage.refreshToken.get(),
  });
};
