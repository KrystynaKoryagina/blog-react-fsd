import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Header } from '@/widgets/Header';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserInited, userActions } from '@/entities/User';
import { classNames } from '@/shared/lib/utils/classNames';
import { useTheme } from '@/shared/lib/contexts/theme';
import { HStack } from '@/shared/ui/Stack';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { AppRouter } from './providers/router';
import './styles/index.scss';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { ToggleFeatureComponent } from '@/shared/lib/utils/toggleFeature';
import { MainLayout } from '@/shared/layouts/MainLayout';

export const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  const inited = useSelector(getUserInited);

  useInitialEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  // TODO get rid of INITED
  if (!inited) {
    return <div>Loader</div>;
  }

  return (
    <ToggleFeatureComponent
      featureName="isRedesignEnable"
      off={
        <div id="app" className={classNames('app', [theme])}>
          <Suspense fallback="">
            <Header />
            <HStack className={classNames('app-content')}>
              <Sidebar />
              <AppRouter />
            </HStack>
          </Suspense>
        </div>
      }
      on={
        <div id="app" className={classNames('app-redesigned', [theme])}>
          <Suspense fallback="">
            <MainLayout
              sidebar={<Sidebar />}
              content={<AppRouter />}
              header={<Header />}
            />
          </Suspense>
        </div>
      }
    />
  );
};
