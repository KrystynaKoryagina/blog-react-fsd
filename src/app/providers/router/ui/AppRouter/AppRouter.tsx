import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Spinner } from '@/shared/ui/Spinner';
import { routes } from '../../config/route.config';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';

export const AppRouter = () => (
  <Suspense fallback={<Spinner />}>
    <Routes>
      {routes.map(({ path, element, authOnly, roles }) => {
        const isRouteProtected = authOnly || roles;

        return (
          <Route
            key={path}
            path={path}
            element={
              isRouteProtected ? (
                <ProtectedRoute authOnly={authOnly} roles={roles}>
                  {element}
                </ProtectedRoute>
              ) : (
                element
              )
            }
          />
        );
      })}
    </Routes>
  </Suspense>
);
