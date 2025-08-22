import { useQuery } from '@tanstack/react-query';

import {
  SUBSTITUTE_COMPENSATIONS_API_PATH,
  substituteCompensationsApi,
} from '../apis/substitute-compensations.api';

export const SubstituteCompensationsQueryKey = [SUBSTITUTE_COMPENSATIONS_API_PATH];

export const useGetSubstituteCompensations = () => {
  return useQuery({
    queryKey: SubstituteCompensationsQueryKey,
    queryFn: substituteCompensationsApi,
  });
};
