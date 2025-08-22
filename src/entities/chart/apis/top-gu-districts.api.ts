import { fetchInstance } from '@/shared';

export const TOP_GU_DISTRICTS_API_PATH = '/graph/risk/topGuDistricts';

export interface TopGuDistrictsApiResponse {
  month: string;
  regionGu: string;
  transSum: number;
  depositAvg: number;
  maxPctile: number;
}

export const topGuDistrictsApi = async (): Promise<TopGuDistrictsApiResponse[]> => {
  const response = await fetchInstance.get<TopGuDistrictsApiResponse[]>(TOP_GU_DISTRICTS_API_PATH);
  return response.data;
};
