/**
 * 위험도 분석 임시 데이터
 */
import type { RiskAnalysisResponse } from '@/entities';

// 서버 응답 형태의 임시 데이터들
export const TEMP_RISK_ANALYSIS_DATA: RiskAnalysisResponse[] = [
  {
    data: {
      riskSummary: {
        score: 20,
        grade: '위험',
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
  {
    data: {
      riskSummary: {
        score: 15,
        grade: '위험',
        factors: [
          { name: '전세가율', percent: 20 },
          { name: '가격하락', percent: 33 },
          { name: '미분양(재고)', percent: 13 },
          { name: '정책/규제', percent: 20 },
          { name: '법적 리스크', percent: 13 },
        ],
      },
      landlord: {
        landlordId: 2,
        name: '김철수',
        normalizedKey: '서울-사업자번호-해시',
        ownedCount: 3,
        grade: 'B',
        createdAt: '2025-08-21T02:26:22.055226',
        updatedAt: '2025-08-21T02:26:22.055226',
      },
      landlordTrust: {
        trustScore: 75,
        subrogationCount: 1,
        arrearsCount: 0,
        litigationCount: 0,
        ownedUnsoldCount: 1,
        grade: 'B',
      },
      landlordPlaces: [
        {
          placeId: 2,
          label: '서울특별시 강남구 테헤란로 123',
          address: '서울특별시 강남구 테헤란로 123',
          addressDetail: '201동 1501호',
        },
      ],
    },
    status: 'SUCCESS',
    serverDateTime: '2025-08-21T02:28:11.398139',
    errorCode: null,
    errorMessage: null,
  },
  {
    data: {
      riskSummary: {
        score: 35,
        grade: '다소 위험',
        factors: [
          { name: '전세가율', percent: 15 },
          { name: '가격하락', percent: 25 },
          { name: '미분양(재고)', percent: 10 },
          { name: '정책/규제', percent: 15 },
          { name: '법적 리스크', percent: 10 },
        ],
      },
      landlord: {
        landlordId: 3,
        name: '이영희',
        normalizedKey: '대구-사업자번호-해시',
        ownedCount: 2,
        grade: 'B',
        createdAt: '2025-08-21T02:26:22.055226',
        updatedAt: '2025-08-21T02:26:22.055226',
      },
      landlordTrust: {
        trustScore: 65,
        subrogationCount: 0,
        arrearsCount: 1,
        litigationCount: 0,
        ownedUnsoldCount: 1,
        grade: 'C',
      },
      landlordPlaces: [
        {
          placeId: 3,
          label: '대구광역시 수성구 동대구로 456',
          address: '대구광역시 수성구 동대구로 456',
          addressDetail: '301동 2001호',
        },
      ],
    },
    status: 'SUCCESS',
    serverDateTime: '2025-08-21T02:28:11.398139',
    errorCode: null,
    errorMessage: null,
  },
  {
    data: {
      riskSummary: {
        score: 55,
        grade: '양호',
        factors: [
          { name: '전세가율', percent: 10 },
          { name: '가격하락', percent: 18 },
          { name: '미분양(재고)', percent: 8 },
          { name: '정책/규제', percent: 12 },
          { name: '법적 리스크', percent: 8 },
        ],
      },
      landlord: {
        landlordId: 4,
        name: '박민수',
        normalizedKey: '인천-사업자번호-해시',
        ownedCount: 1,
        grade: 'A',
        createdAt: '2025-08-21T02:26:22.055226',
        updatedAt: '2025-08-21T02:26:22.055226',
      },
      landlordTrust: {
        trustScore: 85,
        subrogationCount: 0,
        arrearsCount: 0,
        litigationCount: 0,
        ownedUnsoldCount: 0,
        grade: 'A',
      },
      landlordPlaces: [
        {
          placeId: 4,
          label: '인천광역시 연수구 송도동로 789',
          address: '인천광역시 연수구 송도동로 789',
          addressDetail: '401동 3001호',
        },
      ],
    },
    status: 'SUCCESS',
    serverDateTime: '2025-08-21T02:28:11.398139',
    errorCode: null,
    errorMessage: null,
  },
  {
    data: {
      riskSummary: {
        score: 75,
        grade: '다소 안전',
        factors: [
          { name: '전세가율', percent: 5 },
          { name: '가격하락', percent: 12 },
          { name: '미분양(재고)', percent: 5 },
          { name: '정책/규제', percent: 8 },
          { name: '법적 리스크', percent: 5 },
        ],
      },
      landlord: {
        landlordId: 5,
        name: '최지영',
        normalizedKey: '부산-사업자번호-해시2',
        ownedCount: 1,
        grade: 'A',
        createdAt: '2025-08-21T02:26:22.055226',
        updatedAt: '2025-08-21T02:26:22.055226',
      },
      landlordTrust: {
        trustScore: 90,
        subrogationCount: 0,
        arrearsCount: 0,
        litigationCount: 0,
        ownedUnsoldCount: 0,
        grade: 'A',
      },
      landlordPlaces: [
        {
          placeId: 5,
          label: '부산광역시 해운대구 센텀동로 67',
          address: '부산광역시 해운대구 센텀동로 67',
          addressDetail: '501동 4001호',
        },
      ],
    },
    status: 'SUCCESS',
    serverDateTime: '2025-08-21T02:28:11.398139',
    errorCode: null,
    errorMessage: null,
  },
  {
    data: {
      riskSummary: {
        score: 95,
        grade: '매우 안전',
        factors: [
          { name: '전세가율', percent: 2 },
          { name: '가격하락', percent: 5 },
          { name: '미분양(재고)', percent: 2 },
          { name: '정책/규제', percent: 3 },
          { name: '법적 리스크', percent: 2 },
        ],
      },
      landlord: {
        landlordId: 6,
        name: '정수진',
        normalizedKey: '서울-사업자번호-해시2',
        ownedCount: 1,
        grade: 'A',
        createdAt: '2025-08-21T02:26:22.055226',
        updatedAt: '2025-08-21T02:26:22.055226',
      },
      landlordTrust: {
        trustScore: 98,
        subrogationCount: 0,
        arrearsCount: 0,
        litigationCount: 0,
        ownedUnsoldCount: 0,
        grade: 'A',
      },
      landlordPlaces: [
        {
          placeId: 6,
          label: '서울특별시 강남구 테헤란로 456',
          address: '서울특별시 강남구 테헤란로 456',
          addressDetail: '601동 5001호',
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
  if (score <= 20) return '매우 안전';
  if (score <= 40) return '안전';
  if (score <= 60) return '양호';
  if (score <= 80) return '다소 위험';
  return '위험';
};

// 위험도 등급별 색상
export const getRiskGradeColor = (grade: string): string => {
  switch (grade) {
    case '매우 안전':
    case '안전':
      return 'text-green-600';
    case '양호':
      return 'text-blue-600';
    case '다소 위험':
      return 'text-yellow-600';
    case '위험':
      return 'text-red-600';
    default:
      return 'text-gray-600';
  }
};
