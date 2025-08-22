import { KakaoMap } from '@/entities';
import { BEXCO_ADDRESS, Button } from '@/shared';

import { HOUSE_TYPES } from '../constants';
import { useMapAddress } from '../store';

export const MapSection = () => {
  const { mapAddress } = useMapAddress();

  const lat = mapAddress?.latitude || BEXCO_ADDRESS.latitude;
  const lng = mapAddress?.longitude || BEXCO_ADDRESS.longitude;

  return (
    <div className='flex w-1/2 flex-col border-l border-gray-200'>
      <div className='flex gap-3 border-b border-gray-200 p-4'>
        {HOUSE_TYPES.map((type) => (
          <Button key={type} variant='secondary' size='sm'>
            {type}
          </Button>
        ))}
      </div>

      <div className='flex flex-1 items-center justify-center bg-gray-100'>
        <KakaoMap lat={lat} lng={lng} />
      </div>
    </div>
  );
};
