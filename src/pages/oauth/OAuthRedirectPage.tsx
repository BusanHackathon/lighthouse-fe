import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { refreshTokenApi, useGetAuthTicket } from '@/entities';
import { ROUTER_PATH, Spinner, authStorage } from '@/shared';

export default function OAuthRedirectPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const ticket = new URLSearchParams(location.search).get('ticket');

  const { data, isLoading } = useGetAuthTicket(ticket ?? '');

  useEffect(() => {
    const completeLogin = async () => {
      if (data?.refreshToken) {
        try {
          console.log('OAuthRedirectPage - Got refreshToken, getting accessToken');

          // 1. refreshToken 저장
          authStorage.refreshToken.set(data.refreshToken);

          // 2. refreshToken으로 accessToken 발급
          const { accessToken } = await refreshTokenApi({
            refreshToken: data.refreshToken,
          });

          // 3. accessToken 저장
          authStorage.accessToken.set(accessToken);

          console.log('OAuthRedirectPage - Login completed successfully');

          // 4. 메인 페이지로 리다이렉트
          navigate(ROUTER_PATH.ROOT, { replace: true });
        } catch (error) {
          console.error('OAuthRedirectPage - Failed to get accessToken:', error);
          // 에러 발생 시 로그인 페이지로 리다이렉트
          navigate(ROUTER_PATH.LOGIN, { replace: true });
        }
      }
    };

    completeLogin();
  }, [data, navigate]);

  if (!ticket) {
    return <div>로그인을 다시 진행해주세요.</div>;
  }

  if (isLoading) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <div className='text-center'>
          <Spinner />
          <div className='mt-4 text-lg font-semibold'>로그인 처리 중...</div>
          <div className='text-gray-500'>서버와 통신 중입니다.</div>
        </div>
      </div>
    );
  }

  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='text-center'>
        <div className='mb-4 text-2xl font-semibold'>로그인 중입니다...</div>
        <div className='text-gray-500'>잠시만 기다려주세요.</div>
      </div>
    </div>
  );
}
