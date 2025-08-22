import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useGetAuthTicket } from '@/entities';
import { ROUTER_PATH, Spinner, authStorage } from '@/shared';

export default function OAuthRedirectPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const ticket = new URLSearchParams(location.search).get('ticket');

  const { data, isLoading } = useGetAuthTicket(ticket ?? '');

  useEffect(() => {
    if (data) {
      const refreshToken = data.refreshToken;
      authStorage.refreshToken.set(refreshToken);
      navigate(ROUTER_PATH.ROOT, { replace: true });
    }
  }, [data, navigate]);

  if (!ticket) {
    return <div>로그인을 다시 진행해주세요.</div>;
  }

  if (isLoading) {
    return <Spinner />;
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
