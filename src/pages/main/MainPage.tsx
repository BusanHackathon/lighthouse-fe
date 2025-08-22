import { useRef } from 'react';

import { useGetRefreshToken } from '@/entities';
import {
  AlternativeSection,
  ChartSection,
  InputSection,
  LandlordPropertySection,
  LandlordReliabilitySection,
  MapSection,
  RiskAnalysisSummarySection,
} from '@/features';
import { authStorage } from '@/shared';

export default function MainPage() {
  const riskAnalysisRef = useRef<HTMLDivElement>(null);

  const { data: refreshTokenData } = useGetRefreshToken();

  console.log(refreshTokenData);

  if (refreshTokenData) {
    authStorage.accessToken.set(JSON.stringify(refreshTokenData.accessToken));
  }

  return (
    <div className='flex min-h-screen w-full flex-col'>
      <div className='flex w-full gap-4'>
        <InputSection scrollToRiskAnalysis={riskAnalysisRef as React.RefObject<HTMLDivElement>} />
        <MapSection />
      </div>
      <RiskAnalysisSummarySection ref={riskAnalysisRef} />
      <ChartSection />
      <LandlordReliabilitySection />
      <LandlordPropertySection />
      <AlternativeSection />
    </div>
  );
}
