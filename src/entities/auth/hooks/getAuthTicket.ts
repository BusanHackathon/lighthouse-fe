import { useQuery } from '@tanstack/react-query';

import { getTicketApi } from '../apis';

export const GetAuthTicketQueryKey = {
  ticket: (ticket: string) => ['ticket', ticket],
};

export const useGetAuthTicket = (ticket: string) => {
  return useQuery({
    queryKey: GetAuthTicketQueryKey.ticket(ticket),
    queryFn: () => getTicketApi(ticket),
  });
};
