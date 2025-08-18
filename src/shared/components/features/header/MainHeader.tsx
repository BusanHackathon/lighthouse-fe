import { useNavigate } from 'react-router-dom';

import { ROUTER_PATH } from '../../../constants';
import { HEADER_TOKENS } from '../../../styles';
import { cn } from '../../../utils';
import { LogoSection } from '../../common';
import { Button } from '../../ui';

export const MainHeader = () => {
  const navigate = useNavigate();

  return (
    <header className={cn(HEADER_TOKENS.base, HEADER_TOKENS.variants.main)}>
      <LogoSection />
      <Button
        variant='ghost'
        onClick={() => navigate(ROUTER_PATH.LOGIN)}
        className='font-semibold text-[#333D48] hover:text-black'
      >
        간편 로그인
      </Button>
    </header>
  );
};
