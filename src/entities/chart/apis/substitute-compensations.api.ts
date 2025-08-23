import { fetchInstance } from '@/shared';

export const SUBSTITUTE_COMPENSATIONS_API_PATH = '/api/graph/substituteCompensations';

interface SubstituteCompensationsApiResponse {
  month: string;
  cases: number;
  momchange: number;
}

export interface SubstituteCompensationsAPIParams {
  from: string;
  to: string;
}

export const substituteCompensationsApi = async ({
  from,
  to,
}: SubstituteCompensationsAPIParams): Promise<SubstituteCompensationsApiResponse[]> => {
  const response = await fetchInstance.get<SubstituteCompensationsApiResponse[]>(
    SUBSTITUTE_COMPENSATIONS_API_PATH,
    {
      params: { from, to },
    },
  );

  return response.data;
};
