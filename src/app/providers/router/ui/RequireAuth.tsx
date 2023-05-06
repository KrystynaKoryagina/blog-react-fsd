import { getUserAuthData } from 'entities/User';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routes/routes';

interface IRequireAuthProps {
  children: ReactNode;
}

export const RequireAuth = ({ children }: IRequireAuthProps) => {
  const authData = useSelector(getUserAuthData);
  const location = useLocation();

  if (!authData) {
    return <Navigate to={RoutePath.MAIN} state={{ from: location }} replace />;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
