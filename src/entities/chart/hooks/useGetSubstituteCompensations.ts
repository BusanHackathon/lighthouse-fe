import { useQuery } from '@tanstack/react-query';

import {
  SUBSTITUTE_COMPENSATIONS_API_PATH,
  type SubstituteCompensationsAPIParams,
  substituteCompensationsApi,
} from '../apis';

export const SubstituteCompensationsQueryKey = [SUBSTITUTE_COMPENSATIONS_API_PATH];

export const useGetSubstituteCompensations = ({ from, to }: SubstituteCompensationsAPIParams) => {
  return useQuery({
    queryKey: [...SubstituteCompensationsQueryKey, from, to],
    queryFn: () => substituteCompensationsApi({ from, to }),
  });
};
