import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { getChartColor, getChartColorClass } from '@/shared';

type DataPoint = {
  year: string;
  [key: string]: string | number;
};

type Props = {
  data: DataPoint[];
  lines: {
    key: string;
    name: string;
    showDot?: boolean;
  }[];
  title?: string;
  height?: number;
  yAxisFormatter?: (value: number) => string;
  tooltipFormatter?: (value: number, name: string) => [string, string];
  labelFormatter?: (label: string) => string;
};

export const ChartBox = ({
  data,
  lines,
  title,
  yAxisFormatter = (value) => value.toFixed(2),
  tooltipFormatter = (value, name) => [`${value}%`, name],
  labelFormatter = (label) => `20${label}년`,
}: Props) => {
  return (
    <div className='pt-5 pr-8 pb-1 pl-5'>
      {title && (
        <h3 className='mb-10 ml-5 text-start text-3xl font-bold text-[#333D4B]'>{title}</h3>
      )}
      <ResponsiveContainer width='100%' height={300}>
        <LineChart data={data}>
          {/* 가로선 - 실선 */}
          <CartesianGrid horizontal={true} vertical={false} strokeDasharray='0' stroke='#BDBDBF' />
          {/* 세로선 - 점선 */}
          <CartesianGrid
            horizontal={false}
            vertical={true}
            strokeDasharray='3 3'
            stroke='#f0f0f0'
          />
          <XAxis
            dataKey='year'
            stroke='#BDBDBF'
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickMargin={10}
          />
          <YAxis
            stroke='#BDBDBF'
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={yAxisFormatter}
            tickMargin={10}
            domain={[0, 6]}
            ticks={[0, 1, 2, 3, 4, 5, 6]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
            formatter={tooltipFormatter}
            labelFormatter={labelFormatter}
          />
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

              // lines 배열의 순서대로 범례를 생성
              return (
                <ul className='m-0 flex list-none gap-5 p-0'>
                  {lines.map((line, index) => (
                    <li key={index} className='flex items-center gap-2'>
                      <div className={`h-1 w-5 ${getChartColorClass(index)}`} />
                      <span className='text-sm text-gray-600'>{line.name}</span>
                    </li>
                  ))}
                </ul>
              );
            }}
          />
          {lines.map((line, index) => {
            const color = getChartColor(index);
            return (
              <Line
                key={line.key}
                type='monotone'
                dataKey={line.key}
                name={line.name}
                stroke={color}
                strokeWidth={2}
                dot={line.showDot ? { r: 4, fill: color } : false}
                activeDot={line.showDot ? { r: 6, stroke: color, strokeWidth: 2 } : false}
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
