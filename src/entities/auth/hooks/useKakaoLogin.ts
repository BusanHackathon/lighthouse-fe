import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';

import { BASE_URL } from '@/shared';

import { getTicketApi } from '../apis';

// --- 1. "로그인 시작"을 위한 useMutation ---
// 이 훅은 API를 호출하지 않아. 오직 카카오 로그인 페이지로 '이동'시키는 액션만 책임져.
export const useKakaoLogin = () => {
  return useMutation({
    mutationFn: () => {
      // 실제로는 Promise를 반환할 필요는 없지만, mutationFn은 Promise를 기대해.
      window.location.href = `${BASE_URL}/oauth2/authorization/kakao`;
      return Promise.resolve();
    },
    onError: () => {
      toast.error('카카오 로그인 페이지로 이동하는 데 실패했습니다.');
    },
  });
};

// --- 2. "콜백 처리"를 위한 useQuery ---
export const KakaoCallbackQueryKey = {
  callback: (ticket: string) => ['kakaoCallback', ticket],
};

export const useKakaoCallback = (ticket: string) => {
  return useQuery({
    queryKey: KakaoCallbackQueryKey.callback(ticket),
    // code가 있을 때만 이 쿼리를 실행해.
    queryFn: () => getTicketApi(ticket),
    // 이 쿼리는 한 번만 실행되면 되므로, 재시도나 캐시 관련 옵션을 조정할 수 있어.
    retry: 0,
    staleTime: Infinity,
  });
};
