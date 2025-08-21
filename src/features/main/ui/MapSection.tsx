import { Button, KakaoMap } from '@/shared';

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
        <KakaoMap lat={35.1690637154991} lng={129.136018268316} />
      </div>
    </div>
  );
};
