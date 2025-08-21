import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { toast } from 'sonner';

import { useKakaoCallback } from '@/entities';
import { ROUTER_PATH, authStorage } from '@/shared';

export default function OAuthRedirectPage() {
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const ticket = searchParams.get('ticket');

  const { data, isSuccess, isError } = useKakaoCallback(ticket ?? '');

  useEffect(() => {
    if (isSuccess && data) {
      authStorage.refreshToken.set(data.refreshToken);

      navigate(ROUTER_PATH.ROOT);
    }

    if (isError) {
      // 실패 시, 에러 처리 후 로그인 페이지로 이동
      toast.error('카카오 로그인에 실패했습니다.');
      navigate(ROUTER_PATH.LOGIN);
    }
  }, [isSuccess, isError, data, navigate]);

  return <div>로그인 중입니다...</div>;
}
