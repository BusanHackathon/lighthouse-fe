import { fetchInstance } from '@/shared';

import type { Period } from '../types';

export const GRAPH_GU_API_PATH = (gu: string) => `/api/graph/gu/${gu}`;

export interface GraphGuApiResponse extends Period {
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

export interface GraphGuAPIParams extends Period {
  gu: string;
  dong: string;
  from: string;
  to: string;
}

export const graphGuApi = async ({
  gu,
  dong,
  from,
  to,
}: GraphGuAPIParams): Promise<GraphGuApiResponse> => {
  const response = await fetchInstance.get<GraphGuApiResponse>(GRAPH_GU_API_PATH(gu), {
    params: { gu, dong, from, to },
  });
  return response.data;
};
