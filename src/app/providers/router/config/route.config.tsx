// import { AboutPage } from '@/pages/AboutPage';
// import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/articles-page';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import {
  // getRouteAbout,
  getRouteAdmin,
  getRouteArticleCreate,
  getRouteArticleDetails,
  getRouteArticleEdit,
  getRouteArticles,
  getRouteForbidden,
  // getRouteMain,
  getRouteNotFound,
  getRouteProfile,
} from '@/shared/constants/routes';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { AdminPanel } from '@/pages/AdminPanel';
import { UserRole } from '@/entities/User';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { AppRoutesProps } from '../model/types/router.types';

export const routes: AppRoutesProps[] = [
  // {
  //   path: getRouteMain(),
  //   element: <MainPage />,
  // },
  // {
  //   path: getRouteAbout(),
  //   element: <AboutPage />,
  // },
  {
    path: getRouteArticles(),
    element: <ArticlesPage />,
    // authOnly: true,
  },
  {
    path: getRouteArticleDetails(':id'),
    element: <ArticleDetailsPage />,
    // authOnly: true,
  },
  {
    path: getRouteArticleCreate(),
    element: <ArticleEditPage />,
    authOnly: true,
  },
  {
    path: getRouteArticleEdit(':id'),
    element: <ArticleEditPage />,
    authOnly: true,
  },
  {
    path: getRouteProfile(':id'),
    element: <ProfilePage />,
    authOnly: true,
  },
  {
    path: getRouteAdmin(),
    element: <AdminPanel />,
    authOnly: true,
    roles: [UserRole.ADMIN, UserRole.OWNER],
  },
  {
    path: getRouteForbidden(),
    element: <ForbiddenPage />,
  },
  {
    path: getRouteNotFound(),
    element: <NotFoundPage />,
  },
];
