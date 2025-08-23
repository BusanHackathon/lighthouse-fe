import { useState } from 'react';

import { useGetSubstituteCompensations } from '@/entities';
import { Spinner } from '@/shared';

import { SubstituteCompensationsChartBox } from '../components';

type ChartDataPoint = {
  month: string;
  cases: number;
};

export const SubstituteCompensationsSection = () => {
  const [selectedYear, setSelectedYear] = useState<string>('all');

  // 선택된 연도에 따라 API 요청 파라미터 결정
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

  const { data: substituteCompensationsData, isLoading } =
    useGetSubstituteCompensations(getApiParams());

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

  if (!substituteCompensationsData) {
    return <div>데이터가 없습니다.</div>;
  }

  // API 응답 구조에 맞게 data 배열에 접근
  const rawData = substituteCompensationsData.data || [];

  // month와 cases만 활용해서 차트 데이터로 변환
  const chartData: ChartDataPoint[] = Array.isArray(rawData)
    ? rawData.map((item) => ({
        month: item.month,
        cases: item.cases,
      }))
    : [];

  return (
    <div className='mx-auto my-10 w-full max-w-7xl rounded-lg bg-white px-15 pt-10 shadow-[0px_4px_30px_0px_#0000001A]'>
      <SubstituteCompensationsChartBox
        title='부산 대위변제 발생 건수'
        chartData={chartData}
        selectedYear={selectedYear}
        onYearChange={handleYearChange}
      />
    </div>
  );
};
