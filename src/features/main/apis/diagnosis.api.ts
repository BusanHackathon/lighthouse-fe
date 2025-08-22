import type { Landlord, LandlordPlace, LandlordTrust, RiskSummary } from '@/entities';
import { fetchInstance } from '@/shared';

import type { HouseType } from '../types';

export const DIAGNOSIS_API_PATH = '/diagnosis';

interface DiagnosisApiRequest {
  address: string;
  addressDetail: string;
  houseType: HouseType;
  deposit: number;
}

interface DiagnosisApiResponse {
  riskSummary: RiskSummary;
  landlord: Landlord;
  landlordTrust: LandlordTrust;
  landlordPlaces: LandlordPlace[];
}

export const diagnosisApi = async ({
  address,
  addressDetail,
  houseType,
  deposit,
}: DiagnosisApiRequest) => {
  const response = await fetchInstance.post<DiagnosisApiResponse>(DIAGNOSIS_API_PATH, {
    address,
    addressDetail,
    houseType,
    deposit,
  });

  return response.data;
};
