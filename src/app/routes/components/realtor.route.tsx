import { RealtorPage } from '@/pages';

import { ROUTE_CONFIG } from '../config';

export const realtorRoutes = [
  {
    path: ROUTE_CONFIG.REALTOR.path,
    element: <RealtorPage />,
  },
];
