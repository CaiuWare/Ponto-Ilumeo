import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './home';
import { TimeClockPage } from './timeClock';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/id',
    element: <TimeClockPage />
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}