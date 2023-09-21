import { ReactNode } from 'react';
import { UserRole } from '@/entities/User';
import { RequireAuth } from '../RequireAuth/RequireAuth';
import { RequireRole } from '../RequireRole/RequireRole';

interface ProtectedRouteProps {
  roles?: UserRole[];
  authOnly?: boolean;
  children: ReactNode;
}

export const ProtectedRoute = ({ authOnly, roles, children }: ProtectedRouteProps) => {
  if (roles) {
    return <RequireRole roles={roles}>{children}</RequireRole>;
  }

  if (authOnly) {
    return <RequireAuth>{children}</RequireAuth>;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
