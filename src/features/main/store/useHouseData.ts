import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import type { Landlord, LandlordPlace, LandlordTrust, RiskSummary } from '@/entities';

export type HouseDiagnosisData = {
  riskSummary: RiskSummary;
  landlord: Landlord;
  landlordTrust: LandlordTrust;
  landlordPlaces: LandlordPlace[];
};

// API 응답 형태
export type ApiResponse = {
  data: HouseDiagnosisData;
  status: string;
  serverDateTime: string;
  errorCode: string | null;
  errorMessage: string | null;
};

type HouseDataState = {
  // 상태
  diagnosisData: HouseDiagnosisData | null;
  isLoading: boolean;
  error: string | null;

  // 액션
  setDiagnosisData: (data: HouseDiagnosisData | ApiResponse) => void;
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
      setDiagnosisData: (data: HouseDiagnosisData | ApiResponse) => {
        // API 응답 형태인지 확인하고 적절히 처리
        const processedData = 'data' in data ? data.data : data;
        set({ diagnosisData: processedData });
      },

      clearDiagnosisData: () => {
        set({ diagnosisData: null });
      },

      resetState: () => {
        set({ diagnosisData: null });
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
