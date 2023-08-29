import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { RoutePath } from 'shared/config/routes/routes';
import { AppRoutesProps } from '../model/types/router';
import { ArticleEditPage } from 'pages/ArticleEditPage';
import { AdminPanel } from 'pages/AdminPanel';
import { UserRole } from 'entities/User';
import { ForbiddenPage } from 'pages/ForbiddenPage';

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
    path: RoutePath.ARTICLES,
    element: <ArticlesPage />,
    authOnly: true,
  },
  {
    path: `${RoutePath.ARTICLE_DETAILS}/:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  {
    path: `${RoutePath.ARTICLE_CREATE}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  {
    path: `${RoutePath.ARTICLE_DETAILS}/:id/edit`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  {
    path: `${RoutePath.PROFILE}/:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  {
    path: RoutePath.ADMIN_PANEL,
    element: <AdminPanel />,
    authOnly: true,
    roles: [UserRole.ADMIN, UserRole.OWNER],
  },
  {
    path: RoutePath.FORBIDDEN,
    element: <ForbiddenPage />,
  },
  {
    path: RoutePath.NOT_FOUND,
    element: <NotFoundPage />,
  },
];
