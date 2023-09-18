import { Suspense, useEffect } from 'react';
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

export const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  // TODO 47 Router v6 private protectеd routes. Защищенные маршруты
  // Хочу задать вопрос. Почему у нас не работали пути без _inited в сторе?
  // Когда мы создали RequireAuth на 01:38, мы ведь подписались к стору в этом компоненте на изменение auth через useSelecor(getUserAuthData)
  // Когда рендерится app, у нас рендерится router, потом отрабатывает useEffect в котором диспатчистся initAuthData и пользователь становится авторизован. Я думал в таком случае наш компонент RequireAuth, так как подписан на auth, с помощью useSelecor(getUserAuthData) должен увидеть это изменение и уже вместо navigate возвращать children.
  // Не совсем понятно, во всех других местах когда стор изменится - компонент перерендерится. А в случае с раутером всегда undefined внутри RequireAuth, даже если данные пользователя уже есть в store.
  // Хотя я считал, что произойдет ререндер RequireAuth, как только мы из localStorage достанем и положим в стор данные пользователя.

  /*
  Тимур Ульби
Он это изменение видит, ты прав, но редирект срабатывает раньше, чем инициализируется стор
Ср 22 Мар 19:35  1 • Нравится • Подписаться

Feliche-Demian Netliukh
А почему тогда когда мы переходим с другой страницы где юзер уже залогирован (то есть стор инициализировался) нас все равно редиректит? Стор инициализируеться отдельно для каждого компонента?
  */
  const inited = useSelector(getUserInited);

  useInitialEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div id='app' className={classNames('app', [theme])}>
      <Suspense fallback=''>
        <Header />
        <HStack>
          <Sidebar />
          {/* TODO add spinner instead of INITED */}
          {inited && <AppRouter />}
        </HStack>
      </Suspense>
    </div>
  );
};
