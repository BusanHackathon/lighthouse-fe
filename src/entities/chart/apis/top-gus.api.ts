import { fetchInstance } from '@/shared';

import type { Period } from '../types';

export const TOP_GUS_API_PATH = '/api/graph/top-gus';

export interface TopGusApiData {
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

export interface TopGusApiResponse {
  data: TopGusApiData[];
  status: string;
  serverDateTime: string;
  errorCode: string | null;
  errorMessage: string | null;
}

export interface TopGusAPIParams extends Period {
  limit: number;
}

export const topGusApi = async ({ month, limit }: TopGusAPIParams): Promise<TopGusApiResponse> => {
  const response = await fetchInstance.get<TopGusApiResponse>(TOP_GUS_API_PATH, {
    params: { month, limit },
  });
  return response.data;
};
