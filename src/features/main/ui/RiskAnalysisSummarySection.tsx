import { forwardRef } from 'react';

import { Spinner } from '@/shared';

import { RiskChartBox, RiskFactorsBox } from '../components';
import { DEFAULT_RISK_ANALYSIS_DATA } from '../mock/risk-analysis.mock';
import { useHouseData } from '../store';

export const RiskAnalysisSummarySection = forwardRef<HTMLDivElement>((_, ref) => {
  const { diagnosisData, isLoading, error } = useHouseData();

  if (isLoading) return <Spinner />;

  if (error) return <div className='text-red-500'>{error}</div>;

  // 진단 데이터가 없으면 mock 데이터 사용
  const data = diagnosisData || DEFAULT_RISK_ANALYSIS_DATA.data;

  // 데이터 구조 검증
  if (data?.riskSummary?.score === null || !data?.riskSummary?.factors) {
    return <div className='text-red-500'>데이터 구조가 올바르지 않습니다.</div>;
  }

  return (
    <div
      ref={ref}
      className='mx-auto mt-10 flex w-full max-w-7xl rounded-lg bg-white shadow-[0px_4px_30px_0px_#0000001A]'
    >
      {/* 메인 위험도 분석 섹션 */}
      <div className='flex w-full justify-between px-10 pt-5'>
        {/* 왼쪽: 위험도 게이지 */}
        <RiskChartBox riskScore={data.riskSummary.score} title='전세 계약 최종 위험도' />
        {/* 오른쪽: 핵심 위험 요인 */}
        <RiskFactorsBox riskFactors={data.riskSummary.factors} />
      </div>
    </div>
  );
});

RiskAnalysisSummarySection.displayName = 'RiskAnalysisSummarySection';
