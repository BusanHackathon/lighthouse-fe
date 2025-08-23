import { useQuery } from '@tanstack/react-query';

import { SIZE_PRICE_API_PATH, type SizePriceAPIParams, sizePriceApi } from '../apis';

export const SizePriceQueryKey = [SIZE_PRICE_API_PATH];

export const useGetSizePrice = ({
  sizeBand = 'ALL',
  from = '2024-01',
  to = '2024-12',
  limit = 12,
}: SizePriceAPIParams) => {
  return useQuery({
    queryKey: SizePriceQueryKey,
    queryFn: () => sizePriceApi({ sizeBand, from, to, limit }),
  });
};
