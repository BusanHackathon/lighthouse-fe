import { KakaoLoginButton, NaverLoginButton } from '../common';

export const LoginBox = () => {
  return (
    <div className='flex flex-col gap-4'>
      <KakaoLoginButton />
      <NaverLoginButton />
    </div>
  );
};
