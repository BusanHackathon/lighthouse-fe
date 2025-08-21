import { Legend, LineChart, ResponsiveContainer, Tooltip } from 'recharts';

import type { ChartData } from '@/entities';

import { ChartAxis, ChartGrid, ChartLineItem, LegendLine } from '../../common';

type Props = {
  chartData: ChartData;
};

export const ChartBox = ({ chartData }: Props) => {
  const { title, lines, data } = chartData;

  return (
    <div className='w-full rounded-lg bg-white p-3'>
      <h3 className='mb-10 ml-5 text-xl font-bold text-gray-900'>{title}</h3>
      <ResponsiveContainer width='100%' height={300}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <ChartGrid />
          <ChartAxis dataKey='month' />
          <Tooltip />
          <Legend
            verticalAlign='top'
            align='left'
            height={36}
            wrapperStyle={{
              paddingBottom: '10px',
              marginLeft: '30px',
              marginTop: '-20px',
            }}
            content={({ payload }) => {
              if (!payload || payload.length === 0) return null;

              return <LegendLine lines={lines} />;
            }}
          />
          {lines.map((line, index) => (
            <ChartLineItem key={line.key} line={line} index={index} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
