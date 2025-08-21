import type { RiskFactor } from '@/entities';

type Props = {
  riskFactors: RiskFactor[];
};

export const RiskFactorsBox = ({ riskFactors }: Props) => {
  return (
    <div className='flex-1 rounded-lg bg-white p-6 shadow-sm'>
      <h3 className='mb-6 text-lg font-bold text-gray-900'>핵심 위험 요인</h3>
      <ul className='space-y-3'>
        {riskFactors.map((factor, index) => (
          <li key={index} className='flex items-center gap-3'>
            <div className='h-2 w-2 rounded-full bg-gray-400' />
            <span className='text-blue-600'>{factor.name}</span>
            <span className='ml-auto font-medium text-red-500'>{factor.percent}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
