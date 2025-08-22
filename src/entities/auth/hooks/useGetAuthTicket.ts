import { useQuery } from '@tanstack/react-query';

import { GET_TICKET_API_PATH, getTicketApi } from '../apis';

export const GetAuthTicketQueryKey = [GET_TICKET_API_PATH()];

export const useGetAuthTicket = (ticket: string) => {
  return useQuery({
    queryKey: [GetAuthTicketQueryKey, ticket],
    queryFn: () => getTicketApi(ticket),
    enabled: !!ticket && ticket.trim().length > 0,
  });
};
