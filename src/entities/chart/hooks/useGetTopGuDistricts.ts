import { useQuery } from '@tanstack/react-query';

import { TOP_GU_DISTRICTS_API_PATH, topGuDistrictsApi } from '../apis';

export const TopGuDistrictsQueryKey = [TOP_GU_DISTRICTS_API_PATH];

export const useGetTopGuDistricts = () => {
  return useQuery({
    queryKey: TopGuDistrictsQueryKey,
    queryFn: topGuDistrictsApi,
  });
};
