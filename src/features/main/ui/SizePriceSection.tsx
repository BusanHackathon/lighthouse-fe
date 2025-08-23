import { useState } from 'react';

import { useGetSizePrice } from '@/entities';
import { Spinner } from '@/shared';

import { SizePriceChartBox } from '../components';

export const SizePriceSection = () => {
  const [selectedYear, setSelectedYear] = useState<string>('2024');
  const [selectedSizeBand, setSelectedSizeBand] = useState<
    'ALL' | 'SMALL' | 'MEDIUM' | 'LARGE' | 'X_LARGE'
  >('ALL');

  const getApiParams = () => {
    if (selectedYear === 'all') {
      return {
        from: '2021-01',
        to: '2024-12',
      };
    }

    return {
      from: `${selectedYear}-01`,
      to: `${selectedYear}-12`,
    };
  };

  const handleSizeBandChange = (sizeBand: 'ALL' | 'SMALL' | 'MEDIUM' | 'LARGE' | 'X_LARGE') => {
    setSelectedSizeBand(sizeBand);
  };

  const { data: sizePriceData, isLoading } = useGetSizePrice({
    ...getApiParams(),
    limit: 12,
    sizeBand: selectedSizeBand,
  });

  if (!sizePriceData) {
    return <div>데이터가 없습니다.</div>;
  }

  const rawData = sizePriceData.data || [];

  // API 응답을 차트 데이터로 변환
  const chartData =
    rawData?.map((item) => ({
      month: `${item.month.year}-${item.month.month}`,
      cases: item.baseIndex,
    })) || [];

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
  };

  if (isLoading) {
    return (
      <div className='flex h-full w-full items-center justify-center'>
        <Spinner />
      </div>
    );
  }
  return (
    <div className='mx-auto my-10 w-full max-w-7xl rounded-lg bg-white px-15 pt-10 shadow-[0px_4px_30px_0px_#0000001A]'>
      <SizePriceChartBox
        title='크기별 가격 지수'
        chartData={chartData}
        selectedYear={selectedYear}
        selectedSizeBand={selectedSizeBand}
        onYearChange={handleYearChange}
        onSizeBandChange={handleSizeBandChange}
      />
    </div>
  );
};
