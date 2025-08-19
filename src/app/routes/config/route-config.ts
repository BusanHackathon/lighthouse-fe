import { type LayoutType, ROUTER_PATH } from '@/shared';

export type RouteConfig = {
  path: string;
  requiresRealtor?: boolean;
  layout?: keyof LayoutType;
};

export const ROUTE_CONFIG: Record<string, RouteConfig> = {
  MAIN: {
    path: ROUTER_PATH.MAIN,
    layout: 'Main',
  },
  LOGIN: {
    path: ROUTER_PATH.LOGIN,
    layout: 'Auth',
  },
  RISK_DIAGNOSTICS: {
    path: ROUTER_PATH.RISK_DIAGNOSTICS,
    layout: 'Main',
  },
  RELIABILITY_DIAGNOSTICS: {
    path: ROUTER_PATH.RELIABILITY_DIAGNOSTICS,
    layout: 'Main',
  },
  REALTOR_LOGIN: {
    path: ROUTER_PATH.REALTOR_LOGIN,
    layout: 'Auth',
  },
  REALTOR_CERTIFICATION: {
    path: ROUTER_PATH.REALTOR_CERTIFICATION,
    layout: 'Auth',
  },
  REALTOR: {
    path: ROUTER_PATH.REALTOR,
    requiresRealtor: true, // 공인중개사만 접근 가능
    layout: 'Realtor',
  },
};
