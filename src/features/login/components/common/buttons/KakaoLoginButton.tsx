import { Button } from '@/shared';

import KakaoSymbol from '../../../_assets/kakao-symbol.webp';

export const KakaoLoginButton = () => {
  return (
    <Button className='flex h-11 w-90 items-center gap-3 rounded-lg bg-kakao text-black hover:bg-kakao/80 active:bg-kakao/80'>
      <img src={KakaoSymbol} className='size-4' width={16} height={16} alt='kakao' />
      <span className='text-sm font-semibold'>카카오 계정으로 계속하기</span>
    </Button>
  );
};
