import { LoginBox, TitleBox } from '../components';

export const LoginContentsSection = () => {
  return (
    <div className='flex flex-col items-center gap-10'>
      <TitleBox />
      <LoginBox />
    </div>
  );
};
