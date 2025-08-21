import { RiskChartBox, RiskFactorsBox } from '../components';
import { DEFAULT_RISK_ANALYSIS_DATA, TEMP_RISK_ANALYSIS_DATA, getRiskGradeColor } from '../mock';

export const RiskAnalysisSummarySection = () => {
  // 현재 사용할 임시 데이터
  const currentData = DEFAULT_RISK_ANALYSIS_DATA; // 사진과 일치하는 기본 데이터

  return (
    <div className='mx-auto w-full max-w-6xl p-6'>
      {/* 임시 데이터 정보 표시 */}
      <div className='mb-6 rounded-lg bg-blue-50 p-4'>
        <h2 className='mb-2 text-lg font-semibold text-blue-900'>임시 데이터</h2>
        <p className='text-sm text-blue-700'>
          현재 데이터:{' '}
          <span className='font-medium'>
            {currentData.data.riskSummary.grade} 구간 ({currentData.data.riskSummary.score}점)
          </span>
        </p>
        <p className='mt-1 text-xs text-blue-600'>다른 데이터를 보려면 currentData를 변경하세요</p>
      </div>

      {/* 메인 위험도 분석 섹션 */}
      <div className='flex gap-8'>
        {/* 왼쪽: 위험도 게이지 */}
        <RiskChartBox riskScore={currentData.data.riskSummary.score} />

        {/* 오른쪽: 핵심 위험 요인 */}
        <RiskFactorsBox riskFactors={currentData.data.riskSummary.factors} />
      </div>

      {/* 모든 임시 데이터 미리보기 */}
      <div className='mt-8'>
        <h3 className='mb-4 text-lg font-semibold text-gray-900'>모든 임시 데이터 미리보기</h3>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {TEMP_RISK_ANALYSIS_DATA.map((data, index) => (
            <div key={index} className='rounded-lg border border-gray-200 p-4'>
              <h4 className={`mb-2 font-medium ${getRiskGradeColor(data.data.riskSummary.grade)}`}>
                {data.data.riskSummary.grade} 구간 ({data.data.riskSummary.score}점)
              </h4>
              <p className='text-sm text-gray-600'>임대인: {data.data.landlord.name}</p>
              <p className='text-sm text-gray-600'>
                신뢰도: {data.data.landlordTrust.grade} ({data.data.landlordTrust.trustScore}점)
              </p>
              <div className='mt-2'>
                <p className='text-xs text-gray-500'>주요 위험 요인:</p>
                <ul className='text-xs text-gray-600'>
                  {data.data.riskSummary.factors.slice(0, 2).map((factor, factorIndex) => (
                    <li key={factorIndex}>
                      {factor.name}: {factor.percent}%
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
