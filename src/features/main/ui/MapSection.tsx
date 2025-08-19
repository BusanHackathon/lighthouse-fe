import { Button } from '@/shared';

import { HOUSE_TYPES } from '../constants';

export const MapSection = () => {
  return (
    <div className='flex w-1/2 flex-col border-l border-gray-200'>
      <div className='flex gap-3 border-b border-gray-200 p-4'>
        {HOUSE_TYPES.map((type) => (
          <Button key={type} variant='secondary' size='sm'>
            {type}
          </Button>
        ))}
      </div>

      {/* TODO: 추후 지도 (카카오맵, 네이버 지도, 구글 맵 등) 컴포넌트 추가 */}
      <div className='flex flex-1 items-center justify-center bg-gray-100'>
        <div className='text-center text-gray-500'>
          <p className='mb-2 text-lg font-medium'>지도가 여기에 표시됩니다</p>
          <p className='text-sm'>주소를 입력하고 진단하기를 눌러보세요</p>
        </div>
      </div>
    </div>
  );
};
