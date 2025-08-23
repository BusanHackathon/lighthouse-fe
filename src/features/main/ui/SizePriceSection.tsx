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

  const handleSizeBandChange = (sizeBand: string) => {
    setSelectedSizeBand(sizeBand as 'ALL' | 'SMALL' | 'MEDIUM' | 'LARGE' | 'X_LARGE');
  };

  const { data: sizePriceData, isLoading } = useGetSizePrice({
    ...getApiParams(),
    sizeBand: selectedSizeBand,
    limit: 12,
  });

  if (!sizePriceData) {
    return (
      <div className='mx-auto h-screen w-full max-w-7xl rounded-lg bg-white px-15 shadow-[0px_4px_30px_0px_#0000001A]'>
        <div className='flex h-full w-full items-center justify-center'>
          <Spinner />
        </div>
      </div>
    );
  }

  const rawData = sizePriceData.data || [];

  // API 응답을 차트 데이터로 변환
  const chartData =
    rawData?.map((item) => ({
      month: `${item.month.split('-')[1]}월`,
      year: item.month.split('-')[0],
      baseIndex: item.baseIndex,
      changeRate: item.changeRate,
    })) || [];

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
  };

  if (isLoading) {
    return (
      <div className='mx-auto h-screen w-full max-w-7xl rounded-lg bg-white px-15 shadow-[0px_4px_30px_0px_#0000001A]'>
        <div className='flex h-full w-full items-center justify-center'>
          <Spinner />
        </div>
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
