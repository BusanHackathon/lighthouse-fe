import { getChartColor } from '@/shared/utils/chart';
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

type DongChartData = {
  month: string;
  divergencePct: number;
  regionDong: string;
};

type Props = {
  data: DongChartData[];
  selectedDong?: string;
};

export const DongChart = ({ data, selectedDong }: Props) => {
  if (!data || data.length === 0) {
    return (
      <div className='flex h-[300px] w-full items-center justify-center rounded-lg border border-gray-200'>
        <p className='text-gray-500'>차트 데이터가 없습니다</p>
      </div>
    );
  }

  return (
    <div className='w-full'>
      <div className='mb-4'>
        <h4 className='text-lg font-semibold text-gray-900'>
          {selectedDong || '동'} 괴리율 추이 (절댓값)
        </h4>
        <p className='text-sm text-gray-600'>월별 거래 괴리율 절댓값 변화를 확인하세요</p>
      </div>

      <ResponsiveContainer width='100%' height={300}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          {/* 가로선 (실선) */}
          <CartesianGrid
            horizontal={true}
            vertical={false}
            strokeDasharray='0'
            stroke='#E5E7EB'
            strokeWidth={2}
          />
          {/* 세로선 (점선) */}
          <CartesianGrid
            horizontal={false}
            vertical={true}
            strokeDasharray='3 3'
            stroke='#E5E7EB'
            strokeWidth={1}
          />
          <XAxis
            dataKey='month'
            stroke='#BDBDBF'
            fontSize={12}
            tickLine={false}
            axisLine={true}
            tickMargin={10}
          />
          <YAxis
            stroke='#BDBDBF'
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip
            formatter={(value: number) => [`${value}%`, '괴리율']}
            labelFormatter={(label) => `${label}`}
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
          />
          <Line
            type='monotone'
            dataKey='divergencePct'
            name='거래 괴리율'
            stroke={getChartColor(0)}
            strokeWidth={2}
            dot={{ fill: getChartColor(0), strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: getChartColor(0), strokeWidth: 2 }}
            connectNulls={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
