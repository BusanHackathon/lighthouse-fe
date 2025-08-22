import { fetchInstance } from '@/shared';

export const SUBSTITUTE_COMPENSATIONS_API_PATH = '/api/graph/substituteCompensations';

interface SubstituteCompensationsApiResponse {
  month: string;
  cases: number;
  momchange: number;
}

export const substituteCompensationsApi = async (): Promise<
  SubstituteCompensationsApiResponse[]
> => {
  const response = await fetchInstance.get<SubstituteCompensationsApiResponse[]>(
    SUBSTITUTE_COMPENSATIONS_API_PATH,
  );

  return response.data;
};
