import { useQuery } from '@tanstack/react-query';

import { type SearchPlaceAPIRequest, searchPlaceAPI } from '../apis';

export const SearchPlaceQueryKey = ['searchPlace'];

export const useGetSearchPlace = ({
  q,
  radiusKm,
  includeExternal,
  page,
  size,
}: SearchPlaceAPIRequest) => {
  return useQuery({
    queryKey: SearchPlaceQueryKey,
    queryFn: () => searchPlaceAPI({ q, radiusKm, includeExternal, page, size }),
  });
};
