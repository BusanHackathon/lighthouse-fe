import { NeedleIcon } from '@/shared/components/common';
import { type GaugeData } from '@/shared/utils/chart/risk-chart';

type Props = {
  gaugeData: GaugeData;
};

export const Needle = ({ gaugeData }: Props) => {
  return (
    <div
      className='absolute top-1/2 left-1/2 h-24 origin-bottom -translate-x-1/2 -translate-y-full transition-transform duration-500 ease-in-out'
      style={{
        transform: `rotate(${gaugeData.angle}deg)`,
      }}
    >
      <div className='absolute bottom-0 left-1/2 z-10 h-6 w-6 -translate-x-1/2 translate-y-1/2 rounded-full bg-gray-400' />

      <NeedleIcon className='absolute bottom-0 left-1/2 h-20 w-40 -translate-x-1/2 rounded-md text-gray-800' />
    </div>
  );
};
