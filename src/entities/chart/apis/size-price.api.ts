import { fetchInstance } from '@/shared';

import type { Period } from '../types';

export const SIZE_PRICE_API_PATH = '/api/graph/sizePriceIndex';

interface SizePriceApiResponse {
  month: string;
  sizeband: string;
  baseindex: number;
  changerate: number;
}

export interface SizePriceAPIParams extends Period {}

export const sizePriceApi = async ({
  month = '2024-08',
}: SizePriceAPIParams): Promise<SizePriceApiResponse[]> => {
  const response = await fetchInstance.get<SizePriceApiResponse[]>(SIZE_PRICE_API_PATH, {
    params: { month },
  });
  return response.data;
};
