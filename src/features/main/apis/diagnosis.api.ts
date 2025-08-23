import { fetchInstance } from '@/shared';

import type { DiagnosisApiResponse } from '../store/useHouseData';

export const DIAGNOSIS_API_PATH = '/api/diagnosis';

interface DiagnosisApiRequest {
  address: string;
  scale: string;
}

export const diagnosisApi = async ({ address, scale }: DiagnosisApiRequest) => {
  const response = await fetchInstance.get<DiagnosisApiResponse>(DIAGNOSIS_API_PATH, {
    params: {
      address,
      scale,
    },
  });

  return response.data;
};
