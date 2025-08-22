import type { RiskFactor } from '@/entities';

type Props = {
  riskFactors: RiskFactor[];
};

export const RiskFactorsBox = ({ riskFactors }: Props) => {
  return (
    <div className='w-full rounded-lg bg-white p-6'>
      <h3 className='mb-6 text-2xl font-bold text-gray-900'>주요 위험 요인</h3>
      <div className='flex w-full flex-col gap-2'>
        {riskFactors.map((factor) => (
          <div key={factor.name} className='flex items-center gap-5 py-3 text-center font-semibold'>
            <div className='size-1 rounded-full bg-black' />
            <span className='flex items-center gap-2 text-gray-900'>
              <span className='text-lg text-black'>{factor.name}</span>
              <div className='flex items-center gap-1 font-semibold'>
                <span className='text-red-500'>{factor.percent}</span>
                <span className='text-black'>%</span>
              </div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
