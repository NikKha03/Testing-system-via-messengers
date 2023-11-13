import Auth from './pages/Auth';
import SuAdmin from './pages/SuAdmin';

import { suAdminRoute, loginRoute, registrationRoute } from './utils/consts';

export const authRoutes = [
  {
    path: suAdminRoute,
    Component: SuAdmin,
  },
];

export const publicRoutes = [
  {
    path: loginRoute,
    Component: Auth,
  },
  {
    path: registrationRoute,
    Component: Auth,
  },
];
