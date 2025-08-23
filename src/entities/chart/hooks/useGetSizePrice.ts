import { useQuery } from '@tanstack/react-query';

import { SIZE_PRICE_API_PATH, type SizePriceAPIParams, sizePriceApi } from '../apis';

export const SizePriceQueryKey = [SIZE_PRICE_API_PATH];

export const useGetSizePrice = ({ month }: SizePriceAPIParams) => {
  return useQuery({
    queryKey: SizePriceQueryKey,
    queryFn: () => sizePriceApi({ month }),
  });
};
