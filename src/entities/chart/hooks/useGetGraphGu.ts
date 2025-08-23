import { useQuery } from '@tanstack/react-query';

import { GRAPH_GU_API_PATH, type GraphGuAPIParams, graphGuApi } from '../apis';

export const GraphGuQueryKey = [GRAPH_GU_API_PATH];

export const useGetGraphGu = ({ gu, dong, from, to, month }: GraphGuAPIParams) => {
  return useQuery({
    queryKey: [...GraphGuQueryKey, gu, dong, from, to, month],
    queryFn: () => graphGuApi({ gu, dong, from, to, month }),
    enabled: !!gu,
  });
};
