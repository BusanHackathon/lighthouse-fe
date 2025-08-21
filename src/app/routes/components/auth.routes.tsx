import { LoginPage, OAuthRedirectPage, RealtorCertificationPage, RealtorLoginPage } from '@/pages';
import { ROUTER_PATH } from '@/shared';
import { Layout } from '@/widgets';

import { ROUTE_CONFIG } from '../config';

export const authRoutes = [
  {
    path: ROUTER_PATH.ROOT,
    element: <Layout />,
    children: [
      {
        path: ROUTE_CONFIG.LOGIN.path,
        element: <LoginPage />,
        handle: { layout: ROUTE_CONFIG.LOGIN.layout },
      },
      {
        path: ROUTE_CONFIG.OAUTH_REDIRECT.path,
        element: <OAuthRedirectPage />,
        handle: { layout: ROUTE_CONFIG.OAUTH_REDIRECT.layout },
      },
    ],
  },
  {
    path: ROUTER_PATH.REALTOR,
    element: <Layout />,
    children: [
      {
        path: ROUTE_CONFIG.REALTOR_LOGIN.path,
        element: <RealtorLoginPage />,
        handle: { layout: ROUTE_CONFIG.REALTOR_LOGIN.layout },
      },
      {
        path: ROUTE_CONFIG.REALTOR_CERTIFICATION.path,
        element: <RealtorCertificationPage />,
        handle: { layout: ROUTE_CONFIG.REALTOR_CERTIFICATION.layout },
      },
    ],
  },
];
