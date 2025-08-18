import { useNavigate } from 'react-router-dom';

import { ROUTER_PATH } from '../../../constants';
import { HEADER_TOKENS } from '../../../styles';
import { cn } from '../../../utils';
import { LogoSection } from '../../common';
import { Button } from '../../ui';

export const RealtorHeader = () => {
  const navigate = useNavigate();

  return (
    <header className={cn(HEADER_TOKENS.base, HEADER_TOKENS.variants.realtor)}>
      <LogoSection />
      <Button
        variant='ghost'
        className='font-semibold text-[#333D48] hover:text-black'
        onClick={() => navigate(ROUTER_PATH.REALTOR_LOGIN)}
      >
        로그인
      </Button>
    </header>
  );
};
