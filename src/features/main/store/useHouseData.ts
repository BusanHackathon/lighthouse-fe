import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// API 응답 데이터 타입
export type DiagnosisData = {
  riskSummary: {
    score: number;
    grade: string;
    factors: Array<{
      name: string;
      percent: number;
    }>;
  };
  landlord: {
    landlordId: number;
    name: string;
    normalizedKey: string;
    ownedCount: number;
    createdAt: string;
    updatedAt: string;
  };
  landlordTrust: {
    trustScore: number;
    accidentPts: number;
    policyPts: number;
    leveragePts: number;
    grade: string;
  };
  landlordPlaces: Array<{
    placeId: number;
    address: string;
    addressDetail: string;
    houseType: string;
    riskScore: number;
    riskGrade: string;
  }>;
};

// API 응답 형태
export type DiagnosisApiResponse = {
  data: DiagnosisData;
  status: string;
  serverDateTime: string;
  errorCode: string;
  errorMessage: string;
};

type HouseDataState = {
  // 상태
  diagnosisData: DiagnosisData | null;
  isLoading: boolean;
  error: string | null;

  // 액션
  setDiagnosisData: (data: DiagnosisData | DiagnosisApiResponse) => void;
  clearDiagnosisData: () => void;
  resetState: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
};

export const useHouseData = create<HouseDataState>()(
  devtools(
    (set) => ({
      // 초기 상태
      diagnosisData: null,
      isLoading: false,
      error: null,

      // 액션들
      setDiagnosisData: (data: DiagnosisData | DiagnosisApiResponse) => {
        // API 응답 형태인지 확인하고 적절히 처리
        const processedData = 'data' in data ? data.data : data;
        set({ diagnosisData: processedData });
      },

      clearDiagnosisData: () => {
        set({ diagnosisData: null });
      },

      resetState: () => {
        set({ diagnosisData: null, isLoading: false, error: null });
      },

      setLoading: (loading: boolean) => {
        set({ isLoading: loading });
      },

      setError: (error: string | null) => {
        set({ error });
      },
    }),
    {
      name: 'house-data-store',
    },
  ),
);
