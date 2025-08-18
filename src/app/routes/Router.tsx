import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ROUTER_PATH } from '@/shared';

import { authRoutes, commonRoutes, realtorRoutes } from './components';
import { RealtorGuard } from './guards';

const router = createBrowserRouter([
  {
    path: ROUTER_PATH.REALTOR,
    element: <RealtorGuard />,
    children: realtorRoutes,
  },
  ...authRoutes,
  ...commonRoutes,
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
