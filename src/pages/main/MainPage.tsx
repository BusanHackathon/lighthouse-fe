import { useRef } from 'react';

import {
  AlternativeSection,
  ChartSection,
  InputSection,
  LandlordPropertySection,
  LandlordReliabilitySection,
  MapSection,
  RiskAnalysisSummarySection,
} from '@/features';

export default function MainPage() {
  const riskAnalysisRef = useRef<HTMLDivElement>(null);

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
