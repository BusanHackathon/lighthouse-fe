import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import type { SizePriceChart } from '@/entities';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  getChartColor,
} from '@/shared';

type Props = {
  title: string;
  chartData: SizePriceChart[];
  selectedYear?: string;
  selectedSizeBand?: 'ALL' | 'SMALL' | 'MEDIUM' | 'LARGE' | 'X_LARGE';
  onYearChange?: (year: string) => void;
  onSizeBandChange?: (sizeBand: string) => void;
};

export const SizePriceChartBox = ({
  title,
  chartData,
  selectedYear,
  selectedSizeBand,
  onYearChange,
  onSizeBandChange,
}: Props) => {
  // 데이터의 최솟값과 최댓값 계산
  const allValues = chartData.flatMap((item) => [item.baseIndex, item.changeRate]);
  const minValue = Math.min(...allValues);
  const maxValue = Math.max(...allValues);

  // Y축 범위 설정 (여백 포함)
  const padding = (maxValue - minValue) * 0.1; // 10% 여백
  const yDomainMin = Math.max(0, Math.floor(minValue - padding));
  const yDomainMax = Math.ceil(maxValue + padding);

  // Y축 눈금 생성 (5단위로)
  const generateTicks = (min: number, max: number) => {
    const ticks = [];
    for (let i = min; i <= max; i += 5) {
      ticks.push(i);
    }
    return ticks;
  };

  const yTicks = generateTicks(yDomainMin, yDomainMax);

  return (
    <div className='w-full'>
      <div className='flex items-center justify-between'>
        <h3 className='mb-10 ml-5 text-2xl font-bold text-gray-900'>{title}</h3>
        <div className='flex gap-4'>
          <Select value={selectedSizeBand} onValueChange={onSizeBandChange}>
            <SelectTrigger className='w-[180px] border-1 border-gray-300 shadow-none'>
              <SelectValue placeholder='크기 구분' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>크기 구분</SelectLabel>
                <SelectSeparator />
                <SelectItem value='ALL'>전체</SelectItem>
                <SelectItem value='SMALL'>소형</SelectItem>
                <SelectItem value='MEDIUM'>중형</SelectItem>
                <SelectItem value='LARGE'>대형</SelectItem>
                <SelectItem value='X_LARGE'>초대형</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select value={selectedYear} onValueChange={onYearChange}>
            <SelectTrigger className='w-[180px] border-1 border-gray-300 shadow-none'>
              <SelectValue placeholder='기준 연도' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value='all'>전체</SelectItem>
                <SelectSeparator />
                <SelectLabel>기준 연도</SelectLabel>
                <SelectItem value='2021'>2021</SelectItem>
                <SelectItem value='2022'>2022</SelectItem>
                <SelectItem value='2023'>2023</SelectItem>
                <SelectItem value='2024'>2024</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <ResponsiveContainer width='100%' height={300}>
        <BarChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
            domain={[yDomainMin, yDomainMax]}
            ticks={yTicks}
          />
          <Tooltip
            formatter={(value, name) => [value, name]}
            labelFormatter={(label) => {
              const year = selectedYear === 'all' ? '전체' : selectedYear;
              const sizeBandLabel = {
                ALL: '전체',
                SMALL: '소형',
                MEDIUM: '중형',
                LARGE: '대형',
                X_LARGE: '초대형',
              }[selectedSizeBand || 'ALL'];
              return `${year}년 ${label} (${sizeBandLabel})`;
            }}
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
          <Bar
            dataKey='baseIndex'
            name='가격 기준치'
            fill={getChartColor(0)}
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey='changeRate'
            name='가격 변동률'
            fill={getChartColor(1)}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
