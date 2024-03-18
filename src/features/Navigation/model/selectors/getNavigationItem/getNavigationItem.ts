import { createSelector } from 'reselect';
import { StoreSchema } from '@/app/providers/store';
// import MainIcon from '@/shared/assets/icons/main.svg';
// import AboutIcon from '@/shared/assets/icons/about.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import { NavigationLink } from '../../types/navigation';
import {
  // getRouteAbout,
  getRouteArticles,
  // getRouteMain,
  getRouteProfile,
} from '@/shared/constants/routes';

const authData = (state: StoreSchema) => state?.user.authData;

export const getNavigationItems = createSelector(authData, (user) => {
  const navigationItems: NavigationLink[] = [
    {
      path: getRouteArticles(),
      text: 'NAVIGATION.ARTICLES',
      Icon: ArticleIcon,
    },
    // {
    //   path: getRouteMain(),
    //   text: 'NAVIGATION.MAIN',
    //   Icon: MainIcon,
    // },
    // {
    //   path: getRouteAbout(),
    //   text: 'NAVIGATION.ABOUT',
    //   Icon: AboutIcon,
    // },
  ];

  if (user) {
    navigationItems.push(
      {
        path: getRouteProfile(user.id),
        text: 'NAVIGATION.PROFILE',
        Icon: ProfileIcon,
        authOnly: true,
      },
      // {
      //   path: getRouteArticles(),
      //   text: 'NAVIGATION.ARTICLES',
      //   Icon: ArticleIcon,
      //   authOnly: true,
      // },
    );
  }

  return navigationItems;
});
