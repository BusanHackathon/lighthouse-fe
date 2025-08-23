import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

import { refreshTokenApi, useGetAuthTicket } from '@/entities';
import { ROUTER_PATH, Spinner, authStorage } from '@/shared';

export default function OAuthRedirectPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const ticket = new URLSearchParams(location.search).get('ticket');

  const { data, isLoading } = useGetAuthTicket(ticket ?? '');

  const { mutate: refreshTokenMutate, isPending: isRefreshing } = useMutation({
    mutationFn: () => refreshTokenApi({ refreshToken: authStorage.refreshToken.get() }),
    onSuccess: (data) => {
      console.log('AccessToken 발급 성공:', data);
      authStorage.accessToken.set(data.newAccessToken);
      console.log('OAuthRedirectPage - Login completed successfully');
      navigate(ROUTER_PATH.ROOT, { replace: true });
    },
    onError: (error) => {
      console.error('AccessToken 발급 실패:', error);
      navigate(ROUTER_PATH.LOGIN, { replace: true });
    },
  });

  useEffect(() => {
    if (data?.refreshToken) {
      console.log('RefreshToken 발급 성공:', data.refreshToken);
      authStorage.refreshToken.set(data.refreshToken);
      refreshTokenMutate();
    }
  }, [data, refreshTokenMutate]);

  if (!ticket) {
    return <div>로그인을 다시 진행해주세요.</div>;
  }

  if (isLoading || isRefreshing) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <div className='text-center'>
          <Spinner />
          <div className='mt-4 text-lg font-semibold'>
            {isRefreshing ? '액세스 토큰 발급 중...' : '로그인 처리 중...'}
          </div>
          <div className='text-gray-500'>서버와 통신 중입니다.</div>
        </div>
      </div>
    );
  }

  if (!data) {
    return <Spinner />;
  }

  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='text-center'>
        <div className='mb-4 text-2xl font-semibold'>
          {isLoading ? '로그인 처리 중...' : '로그인 중입니다...'}
        </div>

        <div className='text-gray-500'>
          {isLoading ? '서버와 통신 중입니다.' : '잠시만 기다려주세요.'}
        </div>
      </div>
    </div>
  );
}
