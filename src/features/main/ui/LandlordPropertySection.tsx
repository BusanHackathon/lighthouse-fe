import { PropertyListBox, RiskChartBox } from '../components';
import { SERVER_PROPERTIES } from '../mock';

export const LandlordPropertySection = () => {
  // TODO: 위험 점수 신뢰도 비교 차트 데이터 추가
  const riskScore = 70;

  return (
    <div className='mx-auto my-10 w-full max-w-7xl rounded-lg bg-white px-15 py-10 shadow-[0px_4px_30px_0px_#0000001A]'>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
        {/* 왼쪽: 임대인 소유 매물 조회 */}
        <PropertyListBox properties={SERVER_PROPERTIES} title='임대인 소유 매물 조회' />

        {/* 오른쪽: 임대인 매물별 위험 점수 신뢰도 비교 */}
        <RiskChartBox riskScore={riskScore} title='임대인 매물별 위험 점수 신뢰도 비교' />
      </div>
    </div>
  );
};
