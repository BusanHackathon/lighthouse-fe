/**
 * 위험도 분석 관련 entities
 */

export type Factor = {
  name: string;
  percent: number;
};

export type RiskSummary = {
  score: number;
  grade: string;
  factors: Factor[];
};

export type Landlord = {
  landlordId: number;
  name: string;
  normalizedKey: string;
  ownedCount: number;
  grade: string;
  createdAt: string;
  updatedAt: string;
};

export type LandlordTrust = {
  trustScore: number;
  subrogationCount: number;
  arrearsCount: number;
  litigationCount: number;
  ownedUnsoldCount: number;
  grade: string;
};

export type LandlordPlace = {
  placeId: number;
  label: string;
  address: string;
  addressDetail: string;
};

// 위험도 분석 응답 데이터
export type RiskAnalysisResponse = {
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
};
