import { fetchInstance } from '@/shared';

import type { HouseType } from '../types';

export const DIAGNOSIS_API_PATH = '/api/diagnosis';

interface DiagnosisApiResponse {
  address: string;
  addressDetail: string;
  houseType: HouseType;
  deposit: number;
}

export const diagnosisApi = async ({
  address,
  addressDetail,
  houseType,
  deposit,
}: DiagnosisApiResponse) => {
  const response = await fetchInstance.post<DiagnosisApiResponse>(DIAGNOSIS_API_PATH, {
    address,
    addressDetail,
    houseType,
    deposit,
  });

  return response.data;
};
