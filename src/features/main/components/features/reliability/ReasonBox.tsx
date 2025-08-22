import { RELIABILITY_REASONS } from '../../../mock';

export const ReasonBox = () => {
  const data = RELIABILITY_REASONS;

  return (
    <div className='flex w-full flex-col gap-2 pb-3'>
      <h1 className='text-3xl font-bold'>임대인 신뢰도 등급 사유</h1>
      {data.map((reason, index) => (
        <div
          key={`${reason.name}-${reason.percent}-${index}`}
          className='flex items-center gap-5 py-3 text-center font-semibold'
        >
          <div className='size-1 rounded-full bg-black' />
          <span className='flex items-center gap-2 text-gray-900'>
            <span className='text-lg text-black'>{reason.name}</span>
            <div className='flex items-center gap-1'>
              <span className='font-medium text-red-500'>{reason.percent}</span>
              <span className='text-black'>%</span>
            </div>
          </span>
        </div>
      ))}
    </div>
  );
};
