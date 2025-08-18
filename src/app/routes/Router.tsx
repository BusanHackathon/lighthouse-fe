import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  LoginPage,
  MainPage,
  ReliabilityDiagnosticsPage,
  RiskDiagnosticsPage,
  SignupPage,
} from '@/pages';
import { ROUTER_PATH } from '@/shared';

const router = createBrowserRouter([
  {
    path: ROUTER_PATH.MAIN,
    element: <MainPage />,
  },
  {
    path: ROUTER_PATH.SIGNUP,
    element: <SignupPage />,
  },
  {
    path: ROUTER_PATH.LOGIN,
    element: <LoginPage />,
  },
  {
    path: ROUTER_PATH.RISK_DIAGNOSTICS,
    element: <RiskDiagnosticsPage />,
  },
  {
    path: ROUTER_PATH.RELIABILITY_DIAGNOSTICS,
    element: <ReliabilityDiagnosticsPage />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
