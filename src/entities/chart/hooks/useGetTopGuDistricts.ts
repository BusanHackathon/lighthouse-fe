import { useQuery } from '@tanstack/react-query';

import { TOP_GUS_API_PATH, type TopGusAPIParams, topGusApi } from '../apis';

export const TopGuDistrictsQueryKey = [TOP_GUS_API_PATH];

export const useGetTopGuDistricts = ({ month, limit }: TopGusAPIParams) => {
  return useQuery({
    queryKey: TopGuDistrictsQueryKey,
    queryFn: () => topGusApi({ month, limit }),
  });
};
