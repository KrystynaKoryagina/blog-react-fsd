import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Header } from 'widgets/Header';
import { Sidebar } from 'widgets/Sidebar';
import { userActions } from 'entities/User';
import { classNames } from 'shared/lib/utils/classNames';
import { useTheme } from 'shared/lib/contexts/theme';
import { AppRouter } from './providers/router';
import './styles/index.scss';

export const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div id='app' className={classNames('app', [theme])}>
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
