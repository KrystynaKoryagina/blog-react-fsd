import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RoutePath } from 'shared/config/routes/routes';
import { AppRoutesProps } from '../model/types/router';

export const routes: AppRoutesProps[] = [
  {
    path: RoutePath.MAIN,
    element: <MainPage />,
  },
  {
    path: RoutePath.ABOUT,
    element: <AboutPage />,
  },
  {
    path: RoutePath.PROFILE,
    element: <ProfilePage />,
    authOnly: true,
  },
  {
    path: RoutePath.NOT_FOUND,
    element: <NotFoundPage />,
  },
];
