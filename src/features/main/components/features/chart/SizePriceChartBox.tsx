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
  onSizeBandChange?: (sizeBand: 'ALL' | 'SMALL' | 'MEDIUM' | 'LARGE' | 'X_LARGE') => void;
};

export const SizePriceChartBox = ({
  title,
  chartData,
  selectedYear,
  selectedSizeBand,
  onYearChange,
  onSizeBandChange,
}: Props) => {
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
        <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
          <YAxis stroke='#BDBDBF' fontSize={12} tickLine={false} axisLine={false} />
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
          />
          <Line
            type='monotone'
            dataKey='cases'
            name='발생 건수'
            stroke={getChartColor(0)}
            strokeWidth={2}
            dot={{ fill: getChartColor(0), strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: getChartColor(0), strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
