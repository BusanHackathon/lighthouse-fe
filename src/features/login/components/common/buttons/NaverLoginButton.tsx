import { Button } from '@/shared';

import NaverSymbol from '../../../_assets/naver-symbol.webp';

export const NaverLoginButton = () => {
  return (
    <Button className='flex h-11 w-90 items-center gap-3 rounded-lg bg-naver text-white hover:bg-naver/90 active:bg-naver/80'>
      <img src={NaverSymbol} className='size-4' width={16} height={16} alt='naver' />
      <span className='text-sm font-semibold'>네이버 계정으로 계속하기</span>
    </Button>
  );
};
