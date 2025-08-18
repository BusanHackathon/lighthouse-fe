import { RealtorPage } from '@/pages';
import { ROUTER_PATH } from '@/shared';
import { Layout } from '@/widgets';

import { ROUTE_CONFIG } from '../config';

export const realtorRoutes = [
  {
    path: ROUTER_PATH.REALTOR,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <RealtorPage />,
        handle: { layout: ROUTE_CONFIG.REALTOR.layout },
      },
    ],
  },
];
