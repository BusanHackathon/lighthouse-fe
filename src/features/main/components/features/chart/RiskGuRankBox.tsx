import { useState } from 'react';

import { ALL_GU_LIST, LIMIT_LIST, MONTH_LIST, type TopGusApiData } from '@/entities';
import { Button, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared';

import { RiskInfo } from '../../common';

import { GraphGuBox } from './GraphGuBox';

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
  const [selectedGu, setSelectedGu] = useState<TopGusApiData | null>(null);

  // API 데이터에서 구 이름 추출
  const apiGuList = guList.map((item) => item.regionGu);

  // API 데이터가 있으면 사용, 없으면 기본 목록 사용
  const allGuList = apiGuList.length > 0 ? apiGuList : ALL_GU_LIST;

  const displayedGuList = isExpanded ? allGuList : allGuList.slice(0, selectedLimit || 15);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const selectGu = (guName: string) => {
    const selectedGuData = guList.find((item) => item.regionGu === guName);
    setSelectedGu(selectedGuData || null);
  };

  return (
    <div className='w-full'>
      <div className='mb-4 flex items-center justify-between'>
        <h3 className='text-2xl font-bold text-gray-900'>거래가 괴리율 순위</h3>
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
        {displayedGuList.map((gu, index) => {
          const isSelected = selectedGu?.regionGu === gu;

          return (
            <Button
              variant='secondary'
              key={index}
              onClick={() => selectGu(gu)}
              className={`rounded-lg px-2 py-2 text-sm font-medium transition-colors focus:border-2 focus:border-gray-200 focus:bg-white ${
                isSelected ? 'border-blue-300 bg-blue-100 text-blue-700' : 'text-gray-700'
              }`}
            >
              {gu}
            </Button>
          );
        })}
      </div>

      {selectedGu && (
        <div className='mb-4 h-[133px] w-[200px] rounded-lg border border-gray-200 p-4'>
          <div className='mb-4 text-lg font-semibold text-gray-900'>
            {selectedGu.regionGu} 위험도 정보
          </div>
          <div className='flex justify-start'>
            <RiskInfo
              riskLevel={
                selectedGu.riskLevel as 'STABLE' | 'MEDIUM_RISK' | 'HIGH_RISK' | 'LOW_RISK'
              }
              transactionGapRate={Math.abs(selectedGu.divergencePct).toFixed(1)}
            />
          </div>
        </div>
      )}

      <GraphGuBox selectedGu={selectedGu?.regionGu} selectedMonth={selectedMonth} />

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
