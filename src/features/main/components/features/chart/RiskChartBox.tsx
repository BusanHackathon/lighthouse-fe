import { Pie, PieChart, ResponsiveContainer } from 'recharts';

import {
  type GaugeData,
  getGaugeAngle,
  getGaugeData,
  getRiskBoxShadowClass,
  getRiskColorClass,
  getRiskScoreColorClass,
} from '@/shared';

import { Needle } from '../../common';

type Props = {
  riskScore: number;
  title: string;
};

export const RiskChartBox = ({ riskScore, title }: Props) => {
  const gaugeData: GaugeData = getGaugeData(riskScore);

  const scoreColorClass = getRiskScoreColorClass(riskScore);

  const needleAngle = getGaugeAngle(riskScore);

  return (
    <div className='w-full rounded-lg bg-white p-6'>
      <h3 className='mb-2 text-2xl font-bold text-gray-900'>{title}</h3>
      <p className='text-md mb-6 flex items-center gap-2 text-gray-600'>
        <span className='font-semibold'>위험 점수 :</span>
        <span className={`font-semibold ${scoreColorClass}`}>{riskScore}</span>
        <span className='text-gray-600'>점</span>
      </p>

      <div className='relative h-90 w-full'>
        <ResponsiveContainer width='100%' height='100%'>
          <PieChart>
            <Pie
              data={gaugeData.data}
              cx='50%'
              cy='50%'
              startAngle={0}
              endAngle={180}
              innerRadius='70%'
              outerRadius='95%'
              paddingAngle={4}
              cornerRadius={6}
              dataKey='value'
              stroke='none'
            />
          </PieChart>
        </ResponsiveContainer>

        {/*  게이지 바늘  */}
        <Needle needleAngle={needleAngle} />

        {/* 위험도 레이블 */}
        <div
          className={`text-md absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-16 transform rounded-full px-4 py-1 font-medium text-white ${getRiskColorClass(gaugeData.color)} ${getRiskBoxShadowClass(gaugeData.color)}`}
        >
          {gaugeData.label}
        </div>
      </div>
    </div>
  );
};
