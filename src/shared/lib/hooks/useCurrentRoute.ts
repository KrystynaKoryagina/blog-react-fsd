import { AppRouteByPath, AppRoutes } from '@/shared/constants/routes';
import { useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

export const useCurrentRoute = () => {
  const location = useLocation();
  const [appRoute, setAppRoute] = useState<AppRoutes>(AppRoutes.ARTICLES);

  useEffect(() => {
    Object.entries(AppRouteByPath).forEach(([pattern, route]) => {
      if (matchPath(pattern, location.pathname)) {
        setAppRoute(route);
      }
    });
  }, [location.pathname]);

  return appRoute;
};
