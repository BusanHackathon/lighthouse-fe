/**
 * 위험도 분석 임시 데이터
 */
import type { RiskAnalysisResponse } from '@/entities';

// 서버 응답 형태의 임시 데이터들
export const TEMP_RISK_ANALYSIS_DATA: RiskAnalysisResponse[] = [
  {
    data: {
      riskSummary: {
        score: 50,
        factors: [
          { name: '전세가율', percent: 12 },
          { name: '가격하락', percent: 10 },
          { name: '미분양(재고)', percent: 7 },
          { name: '정책/규제', percent: 18 },
          { name: '법적 리스크', percent: 16 },
        ],
      },
      landlord: {
        landlordId: 1,
        name: '홍길동',
        normalizedKey: '부산-사업자번호-해시',
        ownedCount: 1,
        grade: 'B',
        createdAt: '2025-08-21T02:26:22.055226',
        updatedAt: '2025-08-21T02:26:22.055226',
      },
      landlordTrust: {
        trustScore: 95,
        subrogationCount: 0,
        arrearsCount: 0,
        litigationCount: 0,
        ownedUnsoldCount: 0,
        grade: 'A',
      },
      landlordPlaces: [
        {
          placeId: 1,
          label: '부산광역시 해운대구 센텀동로 45',
          address: '부산광역시 해운대구 센텀동로 45',
          addressDetail: '101동 1001호',
        },
      ],
    },
    status: 'SUCCESS',
    serverDateTime: '2025-08-21T02:28:11.398139',
    errorCode: null,
    errorMessage: null,
  },
];

// 기본 위험도 데이터 (사진과 일치)
export const DEFAULT_RISK_ANALYSIS_DATA: RiskAnalysisResponse = TEMP_RISK_ANALYSIS_DATA[0];

// 위험도 구간별 설명
export const RISK_LEVEL_DESCRIPTIONS = {
  SAFE: '매우 안전한 전세 계약입니다.',
  MODERATE_SAFE: '안전한 전세 계약입니다.',
  GOOD: '양호한 전세 계약입니다.',
  MODERATE_RISK: '주의가 필요한 전세 계약입니다.',
  RISK: '위험한 전세 계약입니다.',
} as const;

// 위험도 점수별 등급 매핑
export const getRiskGrade = (score: number): string => {
  if (score <= 20) return '매우 위험';
  if (score <= 40) return '위험';
  if (score <= 60) return '양호';
  if (score <= 80) return '다소 안전';
  return '안전';
};

// 위험도 등급별 색상
export const getRiskGradeColor = (grade: string): string => {
  switch (grade) {
    case '매우 위험':
    case '위험':
      return 'text-red-600';
    case '양호':
      return 'text-green-600';
    case '다소 위험':
      return 'text-yellow-600';
    case '다소 안전':
    case '안전':
      return 'text-red-600';
    default:
      return 'text-gray-600';
  }
};
