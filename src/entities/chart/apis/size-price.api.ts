import { fetchInstance } from '@/shared';

export const SIZE_PRICE_API_PATH = '/api/graph/sizePriceIndex/series';

interface SizePriceApiData {
  month: string;
  baseIndex: number;
  changeRate: number;
}

export interface SizePriceApiResponse {
  data: SizePriceApiData[];
  status: string;
  serverDateTime: string;
  errorCode: string | null;
  errorMessage: string | null;
}

export interface SizePriceAPIParams {
  sizeBand: 'ALL' | 'SMALL' | 'MEDIUM' | 'LARGE' | 'X_LARGE';
  from: string;
  to: string;
  limit: number;
}

export const sizePriceApi = async ({
  sizeBand = 'ALL',
  from = '2024-01',
  to = '2024-12',
  limit = 12,
}: SizePriceAPIParams): Promise<SizePriceApiResponse> => {
  const response = await fetchInstance.get<SizePriceApiResponse>(SIZE_PRICE_API_PATH, {
    params: { sizeBand, from, to, limit },
  });

  return response.data;
};
