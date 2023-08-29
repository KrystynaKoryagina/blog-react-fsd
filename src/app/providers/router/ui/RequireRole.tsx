import { UserRole, getUserRole } from 'entities/User';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routes/routes';

interface RequireRoleProps {
  roles?: UserRole[];
  children: ReactNode;
}

export const RequireRole = ({ roles, children }: RequireRoleProps) => {
  const userRole = useSelector(getUserRole);
  const location = useLocation();

  const hasRequiredRoles = userRole && roles?.includes(userRole);

  if (!hasRequiredRoles) {
    return <Navigate to={RoutePath.FORBIDDEN} state={{ from: location }} replace />;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
