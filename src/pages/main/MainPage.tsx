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
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <div className='flex w-full gap-4'>
        <InputSection />
        <MapSection />
      </div>
      <RiskAnalysisSummarySection />
      <ChartSection />
      <LandlordReliabilitySection />
      <LandlordPropertySection />
      <AlternativeSection />
    </div>
  );
}
