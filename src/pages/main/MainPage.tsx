import { useRef } from 'react';

import {
  AlternativeSection,
  InputSection,
  LandlordReliabilitySection,
  MapSection,
  RiskAnalysisSummarySection,
  RiskGuRankSection,
  SizePriceSection,
  SubstituteCompensationsSection,
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
      <div className='flex flex-col gap-10'>
        <SubstituteCompensationsSection />
        <SizePriceSection />
        <RiskGuRankSection />
      </div>
      <LandlordReliabilitySection />
      <AlternativeSection />
    </div>
  );
}
