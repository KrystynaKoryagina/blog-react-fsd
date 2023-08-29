import { UserRole } from 'entities/User';
import { ReactNode } from 'react';
import { RequireAuth } from './RequireAuth';
import { RequireRole } from './RequireRole';

interface ProtectedRouteProps {
  roles?: UserRole[];
  authOnly?: boolean;
  children: ReactNode;
}

export const ProtectedRoute = ({ authOnly, roles, children }: ProtectedRouteProps) => {
  if (roles) {
    return <RequireRole roles={roles}>{children}</RequireRole>;
  }

  return <RequireAuth>{children}</RequireAuth>;
};
