import { LoginContentsSection } from '@/features';
import { AuthLogoSection } from '@/shared';

export default function LoginPage() {
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <div className='flex flex-col items-center gap-12'>
        <AuthLogoSection />
        <LoginContentsSection />
      </div>
    </div>
  );
}
