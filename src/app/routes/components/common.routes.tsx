import { MainPage, ReliabilityDiagnosticsPage, RiskDiagnosticsPage } from '@/pages';
import { ROUTER_PATH } from '@/shared';
import { Layout } from '@/widgets';

import { ROUTE_CONFIG } from '../config';

export const commonRoutes = [
  {
    path: ROUTER_PATH.ROOT,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
        handle: { layout: ROUTE_CONFIG.MAIN.layout },
      },
      {
        path: ROUTE_CONFIG.RISK_DIAGNOSTICS.path,
        element: <RiskDiagnosticsPage />,
        handle: { layout: ROUTE_CONFIG.RISK_DIAGNOSTICS.layout },
      },
      {
        path: ROUTE_CONFIG.RELIABILITY_DIAGNOSTICS.path,
        element: <ReliabilityDiagnosticsPage />,
        handle: { layout: ROUTE_CONFIG.RELIABILITY_DIAGNOSTICS.layout },
      },
    ],
  },
];
