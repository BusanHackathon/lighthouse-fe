import { useQuery } from '@tanstack/react-query';

import { TOP_GUS_API_PATH, type TopGusAPIParams, topGusApi } from '../apis';

export const useGetTopGus = ({ month, limit }: TopGusAPIParams) => {
  return useQuery({
    queryKey: [TOP_GUS_API_PATH, { month, limit }],
    queryFn: () => topGusApi({ month, limit }),
  });
};
