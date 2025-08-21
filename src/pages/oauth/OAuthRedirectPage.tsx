import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useGetAuthTicket } from '@/entities/auth';

import { ROUTER_PATH } from '@/shared';

export default function OAuthRedirectPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  // URL에서 ticket 파라미터 추출
  const ticket = searchParams.get('ticket');
  const oauthError = searchParams.get('error');
  const errorDescription = searchParams.get('error_description');

  // OAuth 에러 처리
  useEffect(() => {
    if (oauthError) {
      setError(errorDescription || `OAuth 인증 오류: ${oauthError}`);
    }
  }, [oauthError, errorDescription]);

  // ticket이 없으면 에러 처리
  useEffect(() => {
    if (!oauthError && !ticket) {
      setError('인증 토큰이 없습니다. 다시 로그인해주세요.');
    }
  }, [ticket, oauthError]);

  // ticket이 있고 OAuth 에러가 없을 때만 API 호출
  const shouldCallApi = !!ticket && !oauthError;
  const {
    data: authData,
    error: apiError,
    isLoading,
  } = useGetAuthTicket(shouldCallApi ? ticket : '');

  // API 에러 처리
  useEffect(() => {
    if (apiError) {
      console.error('API 호출 중 오류:', apiError);
      setError('인증 검증에 실패했습니다. 다시 시도해주세요.');
    }
  }, [apiError]);

  // 성공 시 처리
  useEffect(() => {
    if (authData && !isLoading && !apiError && shouldCallApi) {
      console.log('OAuth 인증 성공!', authData);

      // refreshToken을 localStorage에 저장
      localStorage.setItem('refreshToken', authData.refreshToken);

      // 메인 페이지로 이동
      navigate(ROUTER_PATH.MAIN, { replace: true });
    }
  }, [authData, isLoading, apiError, navigate, shouldCallApi]);

  if (isLoading && shouldCallApi) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <div className='text-center'>
          <div className='mb-4'>
            <div className='mx-auto h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent'></div>
          </div>
          <p className='text-lg font-medium text-gray-700'>인증 처리 중...</p>
          <p className='mt-2 text-sm text-gray-500'>잠시만 기다려주세요.</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <div className='text-center'>
          <div className='mb-4'>
            <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100'>
              <svg
                className='h-6 w-6 text-red-600'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </div>
          </div>
          <h2 className='mb-2 text-xl font-semibold text-gray-900'>인증 실패</h2>
          <p className='mb-4 text-gray-600'>{error}</p>
          <button
            onClick={() => navigate(ROUTER_PATH.LOGIN)}
            className='rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600'
          >
            로그인 페이지로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return null;
}
