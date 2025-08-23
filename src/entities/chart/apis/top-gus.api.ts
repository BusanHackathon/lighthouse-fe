import { fetchInstance } from '@/shared';

import type { Period } from '../types';

export const TOP_GUS_API_PATH = '/api/graph/risk/top-gus';

export interface TopGusApiResponse {
  month: {
    year: number;
    month: string;
    monthValue: number;
    leapYear: boolean;
  };
  regionGu: string;
  riskScoreAvg: number;
  riskLevel: string;
  divergencePct: number;
  transSum: number;
  depositSum: number;
}

export interface TopGusAPIParams extends Period {
  limit: number;
}

export const topGusApi = async ({
  month = '2024-08',
  limit = 5,
}: TopGusAPIParams): Promise<TopGusApiResponse[]> => {
  const response = await fetchInstance.get<TopGusApiResponse[]>(TOP_GUS_API_PATH, {
    params: { month, limit },
  });
  return response.data;
};
