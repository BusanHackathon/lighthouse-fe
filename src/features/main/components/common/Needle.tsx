import { NeedleIcon } from '@/shared';

type Props = {
  needleAngle: number;
};

export const Needle = ({ needleAngle }: Props) => {
  const correctedAngle = needleAngle - 90;

  return (
    <div
      className='absolute top-1/2 left-1/2 origin-bottom -translate-x-1/2 -translate-y-full transition-transform duration-500 ease-in-out sm:h-20 md:h-16 lg:h-24'
      style={{
        transform: `rotate(${correctedAngle}deg)`,
      }}
    >
      <div className='absolute bottom-0 left-1/2 z-10 size-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-gray-400 sm:size-4 md:size-5 lg:size-6' />

      <NeedleIcon className='absolute bottom-0 left-1/2 h-12 w-24 -translate-x-1/2 rounded-md text-gray-800 sm:h-16 sm:w-32 md:h-20 md:w-40 lg:h-24 lg:w-50' />
    </div>
  );
};
