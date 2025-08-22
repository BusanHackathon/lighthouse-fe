import { Spinner } from '@/shared';

import { GradeBox, MultiHouseBox, ReasonBox, SubrogationPaymentBox } from '../components';
import { useHouseData } from '../store';

export const LandlordReliabilitySection = () => {
  const { diagnosisData, isLoading, error } = useHouseData();

  if (isLoading) return <Spinner />;

  if (error) return <div className='text-red-500'>{error}</div>;

  if (!diagnosisData?.landlordTrust)
    return (
      <div className='text-red-500'>데이터가 없습니다. 임대인 신뢰도 데이터를 조회해주세요.</div>
    );

  return (
    <div className='mx-auto mt-10 w-full max-w-7xl rounded-lg bg-white px-15 pt-10 shadow-[0px_4px_30px_0px_#0000001A]'>
      <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
        <GradeBox gradeData={diagnosisData.landlordTrust} />
        <ReasonBox />
        <SubrogationPaymentBox subrogationData={diagnosisData.landlordTrust.subrogationCount} />
        <MultiHouseBox multiHouseData={diagnosisData.landlordTrust} />
      </div>
    </div>
  );
};
