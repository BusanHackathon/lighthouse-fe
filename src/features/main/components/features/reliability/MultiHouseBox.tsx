import { LANDLORD_TRUST_DATA } from '../../../mock';

export const MultiHouseBox = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold'>다주택자</h1>
      <div className='flex w-full items-end justify-center'>
        <span className='text-landlord-reliability font-bold text-blue-500'>
          {LANDLORD_TRUST_DATA.ownedUnsoldCount}
        </span>
        <span className='mb-25 text-5xl font-semibold text-black'>채</span>
      </div>
    </div>
  );
};
