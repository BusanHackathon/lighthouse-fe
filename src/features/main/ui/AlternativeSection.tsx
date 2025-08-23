import { AlternativePropertyListBox, RiskChartBox } from '../components';
import { ALTERNATIVE_PROPERTIES } from '../mock';

export const AlternativeSection = () => {
  // TODO: 위험 점수 신뢰도 비교 차트 데이터 추가
  const riskScore = 61;

  return (
    <div className='shadow-[0px 4px 30px 0px_#0000001A] mx-auto my-10 w-full max-w-7xl rounded-lg bg-white px-15 pt-10'>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
        {/* 왼쪽: 대체 매물 추천 */}
        <AlternativePropertyListBox properties={ALTERNATIVE_PROPERTIES} title='대체 매물 추천' />

        {/* 오른쪽: 임대인 매물별 위험 점수 신뢰도 비교 */}
        <RiskChartBox riskScore={riskScore} title='대체 매물별 위험 점수 신뢰도 비교' />
      </div>
    </div>
  );
};
