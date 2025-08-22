import { useMutation } from '@tanstack/react-query';

import { authStorage } from '@/shared';

import { refreshTokenApi } from '../apis';

export const usePostRefreshToken = () => {
  return useMutation({
    mutationFn: () => refreshTokenApi({ refreshToken: authStorage.refreshToken.get() }),
    onSuccess: (data) => {
      authStorage.accessToken.set(JSON.stringify(data.accessToken));
    },
  });
};
