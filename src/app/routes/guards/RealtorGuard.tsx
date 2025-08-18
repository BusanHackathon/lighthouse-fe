import { Navigate, Outlet } from 'react-router-dom';

import { ROUTER_PATH } from '@/shared';

type Props = {
  fallbackPath?: string;
};

export const RealtorGuard = ({ fallbackPath = ROUTER_PATH.MAIN }: Props) => {
  // TODO: zustand나 storage를 활용해서 실제 사용자 상태 확인
  const isRealtor = true; // 개발 중이므로 임시로 true

  // 공인중개사가 아닌 사용자만 리다이렉트
  if (!isRealtor) {
    return <Navigate to={fallbackPath} replace />;
  }

  return <Outlet />;
};
