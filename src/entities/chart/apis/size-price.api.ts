import { fetchInstance } from '@/shared';

export const SIZE_PRICE_API_PATH = '/graph/sizePriceIndex';

interface SizePriceApiResponse {
  month: string;
  sizeband: string;
  baseindex: number;
  changerate: number;
}

export const sizePriceApi = async (): Promise<SizePriceApiResponse> => {
  const response = await fetchInstance.get<SizePriceApiResponse>(SIZE_PRICE_API_PATH);

  return response.data;
};
