import { fetchInstance } from '@/shared';

export const SUBSTITUTE_COMPENSATIONS_API_PATH = '/api/graph/substituteCompensations';

interface SubstituteCompensationsApiData {
  month: string;
  cases: number;
  momchange: number;
}

export interface SubstituteCompensationsApiResponse {
  data: SubstituteCompensationsApiData[];
  status: string;
  serverDateTime: string;
  errorCode: string | null;
  errorMessage: string | null;
}

export interface SubstituteCompensationsAPIParams {
  from: string;
  to: string;
}

export const substituteCompensationsApi = async ({
  from = '2021-01',
  to = '2024-06',
}: SubstituteCompensationsAPIParams): Promise<SubstituteCompensationsApiResponse> => {
  const response = await fetchInstance.get<SubstituteCompensationsApiResponse>(
    SUBSTITUTE_COMPENSATIONS_API_PATH,
    {
      params: { from, to },
    },
  );

  return response.data;
};
