import { useState } from 'react';

import { useGetGraphGu } from '@/entities';
import { Button } from '@/shared';

import { DongChart } from '../../common/DongChart';

type Props = {
  selectedGu?: string;
};

type DongData = {
  regionDong: string;
  riskEnum: string;
  divergencePct: number;
  riskScoreAvg: number;
};

export const GraphGuBox = ({ selectedGu }: Props) => {
  const [selectedDong, setSelectedDong] = useState<string | null>(null);

  // 선택된 구의 동 데이터 가져오기
  const {
    data: graphGuData,
    isLoading,
    error,
  } = useGetGraphGu({
    gu: selectedGu || '',
  });

  const selectDong = (dongName: string) => {
    setSelectedDong(dongName);
  };

  if (!selectedGu) {
    return (
      <div className='w-full rounded-lg border border-gray-200 p-4'>
        <p className='text-center text-gray-500'>구를 선택해주세요</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className='w-full rounded-lg border border-gray-200 p-4'>
        <p className='text-center text-gray-500'>동 데이터를 불러오는 중...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='w-full rounded-lg border border-gray-200 p-4'>
        <p className='text-center text-red-500'>동 데이터를 불러오는데 실패했습니다</p>
      </div>
    );
  }

  // 실제 API 응답 구조에 맞게 수정
  const actualData = graphGuData?.data;
  const dongsData = actualData?.dongs;

  if (!dongsData || dongsData.length === 0) {
    return (
      <div className='w-full rounded-lg border border-gray-200 p-4'>
        <p className='text-center text-gray-500'>{selectedGu}의 동 데이터가 없습니다</p>
      </div>
    );
  }

  // flatMap을 사용하여 dongs 배열을 미리 처리하고 regionDong만 추출
  const processedDongs: DongData[] = dongsData.flatMap((dong) => ({
    regionDong: dong.regionDong,
    riskEnum: dong.riskEnum,
    divergencePct: dong.divergencePct,
    riskScoreAvg: dong.riskScoreAvg,
  }));

  // regionDong만 추출하여 배열 생성
  const dongNameArray: string[] = processedDongs.map((dong) => dong.regionDong);

  // 선택된 동의 차트 데이터 생성
  const selectedDongData = selectedDong
    ? processedDongs
        .filter((dong) => dong.regionDong === selectedDong)
        .map((dong) => ({
          month: actualData?.month || '',
          divergencePct: Math.abs(dong.divergencePct), // 절댓값 적용
          regionDong: dong.regionDong,
        }))
    : [];

  return (
    <div className='w-full'>
      <div className='mb-4'>
        <h3 className='text-xl font-bold text-gray-900'>{selectedGu} 동별 데이터</h3>
        <p className='text-sm text-gray-600'>동을 선택하면 차트가 표시됩니다</p>
      </div>

      <div className='mb-4 grid grid-cols-3 gap-2'>
        {dongNameArray.map((dongName: string, index: number) => {
          const isSelected = selectedDong === dongName;

          return (
            <Button
              variant='secondary'
              key={index}
              onClick={() => selectDong(dongName)}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors focus:border-2 focus:border-gray-200 focus:bg-white ${
                isSelected ? 'border-blue-300 bg-blue-100 text-blue-700' : 'text-gray-700'
              }`}
            >
              {dongName}
            </Button>
          );
        })}
      </div>

      {selectedDong && (
        <div className='rounded-lg border border-gray-200 p-4'>
          <DongChart data={selectedDongData} selectedDong={selectedDong} />
        </div>
      )}
    </div>
  );
};
