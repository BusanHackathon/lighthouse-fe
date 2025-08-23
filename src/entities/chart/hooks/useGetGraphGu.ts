import { useQuery } from '@tanstack/react-query';

import { GRAPH_GU_API_PATH, graphGuApi } from '../apis';

export const GraphGuQueryKey = [GRAPH_GU_API_PATH];

export const useGetGraphGu = ({ gu }: { gu: string }) => {
  return useQuery({
    queryKey: [...GraphGuQueryKey, gu],
    queryFn: () =>
      graphGuApi({
        gu,
      }),
    enabled: !!gu,
  });
};
