import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { MainPage } from '@/pages';
import { ROUTER_PATH } from '@/shared';

const router = createBrowserRouter([
  {
    path: ROUTER_PATH.MAIN,
    element: <MainPage />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
