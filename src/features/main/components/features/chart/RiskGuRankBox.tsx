import { useState } from 'react';

import { ALL_GU_LIST, LIMIT_LIST, MONTH_LIST, type TopGusApiData } from '@/entities';
import { Button, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared';

type Props = {
  selectedYear?: string;
  selectedMonth?: string;
  selectedLimit?: number;
  guList?: TopGusApiData[];
  onYearChange: (year: string) => void;
  onMonthChange: (month: string) => void;
  onLimitChange: (limit: number) => void;
};

export const RiskGuRankBox = ({
  selectedYear,
  selectedMonth,
  selectedLimit,
  guList = [],
  onYearChange,
  onMonthChange,
  onLimitChange,
}: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // API 데이터에서 구 이름 추출
  const apiGuList = guList.map((item) => item.regionGu);

  // API 데이터가 있으면 사용, 없으면 기본 목록 사용
  const allGuList = apiGuList.length > 0 ? apiGuList : ALL_GU_LIST;

  const displayedGuList = isExpanded ? allGuList : allGuList.slice(0, selectedLimit || 15);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='w-full'>
      <div className='mb-4 flex items-center justify-between'>
        <h3 className='text-2xl font-bold text-gray-900'>위험 구 순위</h3>
        <div className='flex items-center gap-2'>
          <Select value={selectedYear || '2024'} onValueChange={onYearChange}>
            <SelectTrigger className='w-[100px] border-1 border-gray-300 shadow-none'>
              <SelectValue placeholder='연도 선택' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='2024'>2024</SelectItem>
              <SelectItem value='2025'>2025</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedMonth} onValueChange={onMonthChange}>
            <SelectTrigger className='w-[100px] border-1 border-gray-300 shadow-none'>
              <SelectValue placeholder='월 선택' />
            </SelectTrigger>
            <SelectContent>
              {MONTH_LIST.map((month) => (
                <SelectItem key={month} value={month}>
                  {month}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={(selectedLimit || 15).toString()}
            onValueChange={(value) => onLimitChange(Number(value))}
          >
            <SelectTrigger className='w-[100px] border-1 border-gray-300 shadow-none'>
              <SelectValue placeholder='제한 수' />
            </SelectTrigger>
            <SelectContent>
              {LIMIT_LIST.map((limit) => (
                <SelectItem key={limit} value={limit.toString()}>
                  {limit}개
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className='mb-4 grid grid-cols-5 gap-2'>
        {displayedGuList.map((gu, index) => (
          <Button
            variant='secondary'
            key={index}
            className='rounded-lg px-2 py-2 text-sm font-medium text-gray-700 transition-colors focus:border-2 focus:border-gray-200 focus:bg-white'
          >
            {gu}
          </Button>
        ))}
      </div>

      <div className='flex justify-end'>
        <Button
          variant='ghost'
          onClick={toggleExpanded}
          className='text-sm font-medium text-gray-700 hover:bg-white hover:text-gray-900 active:bg-white'
        >
          {isExpanded ? '접기' : '더보기'}
        </Button>
      </div>
    </div>
  );
};
