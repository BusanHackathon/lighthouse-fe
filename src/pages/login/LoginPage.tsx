import { LoginContentsSection, LogoSection } from '@/features';

export default function LoginPage() {
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <div className='flex flex-col items-center gap-12'>
        <LogoSection />
        <LoginContentsSection />
      </div>
    </div>
  );
}
