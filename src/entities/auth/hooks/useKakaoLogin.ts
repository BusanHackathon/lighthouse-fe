import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';

import { BASE_URL } from '@/shared';

import { getTicketApi } from '../apis';

export const useKakaoLogin = () => {
  return useMutation({
    mutationFn: () => {
      window.location.href = `${BASE_URL}/oauth2/authorization/kakao`;
      return Promise.resolve();
    },
    onError: () => {
      toast.error('카카오 로그인 페이지로 이동하는 데 실패했습니다.');
    },
  });
};

export const KakaoCallbackQueryKey = {
  callback: (ticket: string) => ['kakaoCallback', ticket],
};

export const useKakaoCallback = (ticket: string) => {
  return useQuery({
    queryKey: KakaoCallbackQueryKey.callback(ticket),
    queryFn: () => getTicketApi(ticket),
    retry: 0,
    enabled: !!ticket, // ticket이 있을 때만 API 호출
  });
};

export const useGetTicket = (ticket: string) => {
  return useMutation({
    mutationFn: () => getTicketApi(ticket),
  });
};
