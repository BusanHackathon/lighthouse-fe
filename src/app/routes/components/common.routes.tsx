import { MainPage, ReliabilityDiagnosticsPage, RiskDiagnosticsPage } from '@/pages';

import { ROUTE_CONFIG } from '../config';

export const commonRoutes = [
  {
    path: ROUTE_CONFIG.MAIN.path,
    element: <MainPage />,
  },
  {
    path: ROUTE_CONFIG.RISK_DIAGNOSTICS.path,
    element: <RiskDiagnosticsPage />,
  },
  {
    path: ROUTE_CONFIG.RELIABILITY_DIAGNOSTICS.path,
    element: <ReliabilityDiagnosticsPage />,
  },
];
