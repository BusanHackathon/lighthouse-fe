import { LoginPage, RealtorLoginPage, RealtorSignupPage, SignupPage } from '@/pages';
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
        path: ROUTE_CONFIG.SIGNUP.path,
        element: <SignupPage />,
        handle: { layout: ROUTE_CONFIG.SIGNUP.layout },
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
        path: ROUTE_CONFIG.REALTOR_SIGNUP.path,
        element: <RealtorSignupPage />,
        handle: { layout: ROUTE_CONFIG.REALTOR_SIGNUP.layout },
      },
    ],
  },
];
