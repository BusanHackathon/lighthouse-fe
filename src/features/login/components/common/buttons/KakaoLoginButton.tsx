import { BASE_URL, Button } from '@/shared';

import KakaoSymbol from '../../../_assets/kakao-symbol.webp';

export const KakaoLoginButton = () => {
  const kakaoLogin = () => {
    // OAuth 서버로 리다이렉트하되, 리다이렉트 URL을 명시적으로 지정
    const redirectUri = encodeURIComponent(`${window.location.origin}/oauth/redirect`);
    window.location.href = `${BASE_URL}/oauth2/authorization/kakao?redirect_uri=${redirectUri}`;
  };

  return (
    <Button
      onClick={kakaoLogin}
      className='flex h-11 w-90 items-center gap-3 rounded-lg bg-kakao text-black hover:bg-kakao/80 active:bg-kakao/80'
    >
      <img src={KakaoSymbol} className='size-4' width={16} height={16} alt='kakao' />
      <span className='text-sm font-semibold'>카카오 계정으로 계속하기</span>
    </Button>
  );
};
