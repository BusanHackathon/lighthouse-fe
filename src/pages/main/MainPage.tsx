import { ChartSection, InputSection, MapSection } from '@/features';

export default function MainPage() {
  return (
    <div className='flex h-screen w-full flex-col'>
      <div className='flex w-full gap-4'>
        <InputSection />
        <MapSection />
      </div>
      <div className='flex w-full gap-2'>
        <ChartSection />
      </div>
    </div>
  );
}
