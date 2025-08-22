import { getSubrogationColorClass } from '@/shared';

import { LANDLORD_TRUST_DATA } from '../../../mock';

type Props = {
  subrogationData: number;
};

export const SubrogationPaymentBox = ({ subrogationData }: Props) => {
  const data = subrogationData || LANDLORD_TRUST_DATA.subrogationCount;

  return (
    <div>
      <h1 className='text-3xl font-bold'>대위변제 이력</h1>
      <div className='flex w-full items-end justify-center'>
        <span className={`text-landlord-reliability font-bold ${getSubrogationColorClass(data)}`}>
          {data}
        </span>
        <span className='mb-25 text-5xl font-semibold text-black'>회</span>
      </div>
    </div>
  );
};
