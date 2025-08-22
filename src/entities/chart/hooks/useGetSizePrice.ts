import { useQuery } from '@tanstack/react-query';

import { SIZE_PRICE_API_PATH, sizePriceApi } from '../apis';

export const SizePriceQueryKey = [SIZE_PRICE_API_PATH];

export const useGetSizePrice = () => {
  return useQuery({
    queryKey: SizePriceQueryKey,
    queryFn: sizePriceApi,
  });
};
