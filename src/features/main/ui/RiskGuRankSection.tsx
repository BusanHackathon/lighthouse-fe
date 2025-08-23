import { useState } from 'react';

import { useGetTopGus } from '@/entities';
import { Spinner } from '@/shared';

import { RiskGuRankBox } from '../components';

export const RiskGuRankSection = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedMonth, setSelectedMonth] = useState('01월');
  const [selectedLimit, setSelectedLimit] = useState<number>(15);

  const getApiParams = () => {
    const monthValue = selectedMonth.replace('월', '').padStart(2, '0');
    return `${selectedYear}-${monthValue}`;
  };

  const apiParams = getApiParams();

  const {
    data: topGusData,
    isLoading,
    error,
  } = useGetTopGus({
    month: apiParams,
    limit: selectedLimit,
  });

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
  };

  const handleMonthChange = (month: string) => {
    setSelectedMonth(month);
  };

  const handleLimitChange = (limit: number) => {
    setSelectedLimit(limit);
  };

  if (isLoading) {
    return (
      <div className='mx-auto w-full max-w-7xl rounded-lg bg-white px-15 py-10 shadow-[0px_4px_30px_0px_#0000001A]'>
        <div className='flex h-[400px] w-full items-center justify-center'>
          <Spinner />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='mx-auto w-full max-w-7xl rounded-lg bg-white px-15 py-10 shadow-[0px_4px_30px_0px_#0000001A]'>
        <div className='flex h-[400px] w-full items-center justify-center'>
          <div>에러가 발생했습니다: {error.message}</div>
        </div>
      </div>
    );
  }

  const guList = topGusData?.data || [];

  return (
    <div className='mx-auto w-full max-w-7xl rounded-lg bg-white px-15 py-10 shadow-[0px_4px_30px_0px_#0000001A]'>
      <RiskGuRankBox
        selectedYear={selectedYear}
        selectedMonth={selectedMonth}
        selectedLimit={selectedLimit}
        onYearChange={handleYearChange}
        onMonthChange={handleMonthChange}
        onLimitChange={handleLimitChange}
        guList={guList}
      />
    </div>
  );
};
