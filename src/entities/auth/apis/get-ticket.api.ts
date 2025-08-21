import { fetchInstance } from '@/shared';

export const GET_TICKET_API_PATH = '/api/auth/ticket';

interface GetTicketApiResponse {
  refreshToken: string;
}

export const getTicketApi = async (ticket: string): Promise<GetTicketApiResponse> => {
  const response = await fetchInstance.get(GET_TICKET_API_PATH, {
    params: {
      ticket,
    },
  });
  return response.data;
};
