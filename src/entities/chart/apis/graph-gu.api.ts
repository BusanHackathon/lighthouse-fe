import { fetchInstance } from '@/shared';

import type { Period } from '../types';

export const GRAPH_GU_API_PATH = (gu: string) => `/api/graph/gu/${gu}`;

export interface GraphGuApiData extends Period {
  gu: string;
  dongs: {
    month: string;
    regionGu: string;
    regionDong: string;
    riskScoreAvg: number;
    riskEnum: string;
    divergencePct: number;
  }[];
  selectedDong: string;
  series: {
    month: {
      year: number;
      month: string;
      monthValue: number;
      leapYear: boolean;
    };
    transAmt: number;
    depositAmt: number;
    ratioPctileAvg: number;
    divergence: number;
    riskEnum: string;
  }[];
}

export interface GraphGuApiResponse {
  data: GraphGuApiData;
  status: string;
  serverDateTime: string;
  errorCode: string | null;
  errorMessage: string | null;
}

export interface GraphGuAPIParams {
  gu: string;
  dong?: string;
  from?: string;
  to?: string;
  month?: string;
}

export const graphGuApi = async ({
  gu,
  dong,
  from,
  to,
  month,
}: GraphGuAPIParams): Promise<GraphGuApiResponse> => {
  const params: Record<string, string> = { gu };

  if (dong) params.dong = dong;
  if (from) params.from = from;
  if (to) params.to = to;
  if (month) params.month = month;

  const response = await fetchInstance.get<GraphGuApiResponse>(GRAPH_GU_API_PATH(gu), {
    params,
  });
  return response.data;
};
