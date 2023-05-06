import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Spinner } from 'shared/ui/Spinner';
import { routes } from '../config/route.config';
import { RequireAuth } from './RequireAuth';

export const AppRouter = () => (
  <Suspense fallback={<Spinner />}>
    <Routes>
      {routes.map(({ path, element, authOnly }) => (
        <Route
          key={path}
          path={path}
          element={authOnly ? <RequireAuth>{element}</RequireAuth> : element}
        />
      ))}
    </Routes>
  </Suspense>
);
