import Logo from '@/shared/_assets/logo.webp';

import { OptimizedImage } from '@/shared';

export const AuthLogoSection = () => {
  return (
    <div className='ml-5 flex items-center justify-center'>
      <OptimizedImage
        src={Logo}
        alt='logo'
        className='h-25 w-auto'
        showLoadingSkeleton={false}
        imgSize='h-25 w-auto'
      />
    </div>
  );
};
