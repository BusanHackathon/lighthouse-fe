import { RiskChartBox, RiskFactorsBox } from '../components';
import { DEFAULT_RISK_ANALYSIS_DATA } from '../mock';

export const RiskAnalysisSummarySection = () => {
  // 현재 사용할 임시 데이터
  const currentData = DEFAULT_RISK_ANALYSIS_DATA; // 사진과 일치하는 기본 데이터

  return (
    <div className='mx-auto flex w-full max-w-6xl flex-col py-10'>
      {/* 메인 위험도 분석 섹션 */}
      <div className='flex w-full gap-8'>
        {/* 왼쪽: 위험도 게이지 */}
        <RiskChartBox riskScore={currentData.data.riskSummary.score} />

        {/* 오른쪽: 핵심 위험 요인 */}
        <RiskFactorsBox riskFactors={currentData.data.riskSummary.factors} />
      </div>
    </div>
  );
};
