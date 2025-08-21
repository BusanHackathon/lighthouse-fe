import { Pie, PieChart, ResponsiveContainer } from 'recharts';

import { type GaugeData, getGaugeData } from '@/shared';

import { Needle } from '../../common';

// import NeedleIcon from '../../../_assets/needle.svg';

type Props = {
  riskScore: number;
};

export const RiskChartBox = ({ riskScore }: Props) => {
  const gaugeData: GaugeData = getGaugeData(riskScore);

  return (
    <div className='flex-1 rounded-lg bg-white p-6 shadow-sm'>
      <h3 className='mb-2 text-lg font-bold text-gray-900'>전세 계약 최종 위험도</h3>
      <p className='text-md mb-6 flex items-center gap-2 text-gray-600'>
        <span className='font-semibold'>위험 점수 :</span>
        <span className='font-semibold text-green-600'>{riskScore}</span>
        <span className='text-gray-600'>점</span>
      </p>

      <div className='relative h-64 w-full'>
        <ResponsiveContainer width='100%' height='100%'>
          <PieChart>
            <Pie
              data={gaugeData.data}
              cx='50%'
              cy='50%'
              startAngle={0}
              endAngle={180}
              innerRadius={65}
              outerRadius={100}
              paddingAngle={4}
              cornerRadius={6}
              dataKey='value'
              stroke='none'
            />
          </PieChart>
        </ResponsiveContainer>

        {/* --- 게이지 바늘 --- */}
        <Needle gaugeData={gaugeData} />

        {/* 위험도 레이블 */}
        <div
          className='absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-8 transform rounded-full px-4 py-2 text-sm font-medium text-white shadow-sm'
          style={{ backgroundColor: gaugeData.color }}
        >
          {gaugeData.label}
        </div>
      </div>
    </div>
  );
};
