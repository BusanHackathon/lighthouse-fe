import { useNavigate } from 'react-router-dom';

import ProfileImage from '../../../_assets/profile.webp';
import { ROUTER_PATH } from '../../../constants';
import { HEADER_TOKENS } from '../../../styles';
import { authStorage, cn } from '../../../utils';
import { LogoSection } from '../../common';
import { Avatar, AvatarImage, Button } from '../../ui';

export const RealtorHeader = () => {
  const navigate = useNavigate();

  const token = authStorage.accessToken.get();

  return (
    <header className={cn(HEADER_TOKENS.base, HEADER_TOKENS.variants.realtor)}>
      <LogoSection />
      {token ? (
        <Avatar>
          <AvatarImage src={ProfileImage} />
        </Avatar>
      ) : (
        <Button
          variant='ghost'
          className='font-semibold text-[#333D48] hover:text-black'
          onClick={() => navigate(ROUTER_PATH.REALTOR_LOGIN)}
        >
          로그인
        </Button>
      )}
    </header>
  );
};
