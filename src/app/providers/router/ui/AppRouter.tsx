import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Spinner } from 'shared/ui/Spinner';
import { routes } from '../config/route.config';

export const AppRouter = () => (
  <Suspense fallback={<Spinner />}>
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  </Suspense>
);
