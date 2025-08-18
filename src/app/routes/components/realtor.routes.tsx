import { RealtorPage } from '@/pages';
import { Layout } from '@/widgets';

import { ROUTE_CONFIG } from '../config';

export const realtorRoutes = [
  {
    path: ROUTE_CONFIG.REALTOR.path,
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
