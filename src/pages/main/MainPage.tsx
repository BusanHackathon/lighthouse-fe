import { ChartSection, InputSection, MapSection, RiskAnalysisSummarySection } from '@/features';

export default function MainPage() {
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <div className='flex w-full gap-4'>
        <InputSection />
        <MapSection />
      </div>
      <div className='flex w-full flex-col'>
        <RiskAnalysisSummarySection />
      </div>
      <div className='flex w-full gap-2'>
        <ChartSection />
      </div>
    </div>
  );
}
