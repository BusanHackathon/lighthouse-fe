import { Link, useLocation } from 'react-router-dom';

import Logo from '../../../_assets/logo.png';
import { ROUTER_PATH } from '../../../constants';

export const LogoSection = () => {
  const location = useLocation();

  const isRealtor = location.pathname.startsWith(ROUTER_PATH.REALTOR);

  return (
    <Link
      className='flex cursor-pointer items-center gap-2 rounded-md px-3 hover:bg-accent focus-visible:border-ring aria-invalid:border-destructive'
      to={isRealtor ? ROUTER_PATH.REALTOR : ROUTER_PATH.ROOT}
    >
      <img className='h-auto w-5' src={Logo} alt='logo' />
      <span className='text-xl font-bold'>LIGHTHOUSE</span>
      {isRealtor && <span className='text-xs text-gray-500'>공인중개사</span>}
    </Link>
  );
};
