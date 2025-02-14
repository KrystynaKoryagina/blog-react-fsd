import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserAuthData } from '@/entities/User';
import { getRouteArticles } from '@/shared/constants/routes';
// import { getRouteMain } from '@/shared/constants/routes';

interface RequireAuthProps {
  children: ReactNode;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const authData = useSelector(getUserAuthData);
  const location = useLocation();

  if (!authData) {
    return (
      <Navigate to={getRouteArticles()} state={{ from: location }} replace />
    );
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
