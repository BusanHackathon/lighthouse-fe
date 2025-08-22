import type { LandlordTrust } from '@/entities';

import { LANDLORD_TRUST_DATA } from '../../../mock';

type Props = {
  multiHouseData: LandlordTrust;
};

export const MultiHouseBox = ({ multiHouseData }: Props) => {
  const data = multiHouseData || LANDLORD_TRUST_DATA;

  return (
    <div>
      <h1 className='text-3xl font-bold'>다주택자</h1>
      <div className='flex w-full items-end justify-center'>
        <span className='text-landlord-reliability font-bold text-blue-500'>
          {data.ownedUnsoldCount}
        </span>
        <span className='mb-25 text-5xl font-semibold text-black'>채</span>
      </div>
    </div>
  );
};
