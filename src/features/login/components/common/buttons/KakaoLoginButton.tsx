import { Button } from '@/shared';

import KakaoSymbol from '../../../_assets/kakao-symbol.webp';

export const KakaoLoginButton = () => {
  const startKakaoLogin = () => {
    // 카카오 OAuth는 백엔드 서버를 통해 처리되어야 함
    window.location.href = 'http://43.200.101.253/oauth2/authorization/kakao';
  };

  return (
    <Button
      onClick={() => startKakaoLogin()}
      className='flex h-11 w-90 items-center gap-3 rounded-lg bg-kakao text-black hover:bg-kakao/80 active:bg-kakao/80'
    >
      <img src={KakaoSymbol} className='size-4' width={16} height={16} alt='kakao' />
      <span className='text-sm font-semibold'>카카오 계정으로 계속하기</span>
    </Button>
  );
};
