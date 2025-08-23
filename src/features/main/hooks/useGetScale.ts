import { useQuery } from '@tanstack/react-query';

import { diagnosisApi } from '../apis';

export const GetScaleQueryKey = ['getScale'];

export const useGetScale = (address: string, scale: string) => {
  return useQuery({
    queryKey: GetScaleQueryKey,
    queryFn: () =>
      diagnosisApi({
        address,
        scale,
      }),
  });
};
