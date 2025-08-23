import { getTrustGradeColorClass } from '@/shared';

import { LANDLORD_TRUST_DATA } from '../../../mock';

type GradeData = {
  trustScore: number;
  accidentPts: number;
  policyPts: number;
  leveragePts: number;
  grade: string;
};

type Props = {
  gradeData: GradeData;
};

export const GradeBox = ({ gradeData }: Props) => {
  const data = gradeData || LANDLORD_TRUST_DATA;

  return (
    <div className='flex flex-col gap-2'>
      <h1 className='text-3xl font-bold'>임대인 신뢰도 등급</h1>
      <span className='text-md flex gap-2 font-semibold'>
        <span className='text-black'>위험점수 :</span>
        <span className='text-chart-green'>{data.trustScore}</span>
        <span className='text-black'>점</span>
      </span>
      <div className='flex w-full items-center justify-center'>
        <span
          className={`text-landlord-reliability font-semibold ${getTrustGradeColorClass(
            data.grade,
          )}`}
        >
          {data.grade}
        </span>
      </div>
    </div>
  );
};
