import { LoginPage, RealtorLoginPage, RealtorSignupPage, SignupPage } from '@/pages';

import { ROUTE_CONFIG } from '../config';

export const authRoutes = [
  {
    path: ROUTE_CONFIG.LOGIN.path,
    element: <LoginPage />,
  },
  {
    path: ROUTE_CONFIG.SIGNUP.path,
    element: <SignupPage />,
  },
  {
    path: ROUTE_CONFIG.REALTOR_LOGIN.path,
    element: <RealtorLoginPage />,
  },
  {
    path: ROUTE_CONFIG.REALTOR_SIGNUP.path,
    element: <RealtorSignupPage />,
  },
];
