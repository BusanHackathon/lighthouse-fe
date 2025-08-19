import Logo from '@/shared/_assets/logo.webp';

export const LogoSection = () => {
  return (
    <div className='ml-5 flex items-center justify-center'>
      <img src={Logo} alt='logo' className='h-25 w-auto' />
    </div>
  );
};
