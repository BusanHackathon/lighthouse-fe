/**
 * 위험도 분석 관련 entities
 */

// 위험 요인
export interface RiskFactor {
  name: string;
  percent: number;
}

// 위험도 요약
export interface RiskSummary {
  score: number;
  grade: string;
  factors: RiskFactor[];
}

// 임대인 정보
export interface Landlord {
  landlordId: number;
  name: string;
  normalizedKey: string;
  ownedCount: number;
  grade: string;
  createdAt: string;
  updatedAt: string;
}

// 임대인 신뢰도
export interface LandlordTrust {
  trustScore: number;
  subrogationCount: number;
  arrearsCount: number;
  litigationCount: number;
  ownedUnsoldCount: number;
  grade: string;
}

// 임대인 소유 매물
export interface LandlordPlace {
  placeId: number;
  label: string;
  address: string;
  addressDetail: string;
}

// 위험도 분석 응답 데이터
export interface RiskAnalysisResponse {
  data: {
    riskSummary: RiskSummary;
    landlord: Landlord;
    landlordTrust: LandlordTrust;
    landlordPlaces: LandlordPlace[];
  };
  status: string;
  serverDateTime: string;
  errorCode: string | null;
  errorMessage: string | null;
}
