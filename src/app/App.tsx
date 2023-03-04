import { Suspense } from 'react';
import { Header } from 'widgets/Header';
import { Sidebar } from 'widgets/Sidebar';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'shared/lib/contexts/theme';
import { AppRouter } from './providers/router';

import './styles/index.scss';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <Suspense fallback=''>
        <Header />
        <div className='content'>
          <Sidebar />
          <div className='content-page'>
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  );
};
