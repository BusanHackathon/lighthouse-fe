import { useState } from 'react';

import { CertificationForm, SubmitSuccessSection, TitleSection } from '@/features';
import { AuthLogoSection } from '@/shared';

export default function RealtorCertificationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <div className='flex flex-col items-center gap-12'>
        <AuthLogoSection />
        {!isSubmitted && <TitleSection />}
        {isSubmitted ? (
          <SubmitSuccessSection />
        ) : (
          <CertificationForm onSuccess={() => setIsSubmitted(true)} />
        )}
      </div>
    </div>
  );
}
