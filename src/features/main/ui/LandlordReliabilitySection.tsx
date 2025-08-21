import { GradeBox, MultiHouseBox, ReasonBox, SubrogationPaymentBox } from '../components';

export const LandlordReliabilitySection = () => {
  return (
    <div className='mx-auto my-10 w-full max-w-7xl rounded-lg bg-white px-15 py-10 shadow-[0px_4px_30px_0px_#0000001A]'>
      <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
        <GradeBox />
        <ReasonBox />
        <SubrogationPaymentBox />
        <MultiHouseBox />
      </div>
    </div>
  );
};
