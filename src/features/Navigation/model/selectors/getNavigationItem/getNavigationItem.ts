import { createSelector } from 'reselect';
import { StoreSchema } from '@/app/providers/store';
import { RoutePath } from '@/shared/config/routes/routes';
import MainIcon from '@/shared/assets/icons/main.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import { NavigationLink } from '../../types/navigation';

const authData = (state: StoreSchema) => state?.user.authData;

export const getNavigationItems = createSelector(
  authData,
  (user) => {
    const navigationItems: NavigationLink[] = [
      {
        path: RoutePath.MAIN,
        text: 'NAVIGATION.MAIN',
        Icon: MainIcon,
      },
      {
        path: RoutePath.ABOUT,
        text: 'NAVIGATION.ABOUT',
        Icon: AboutIcon,
      },
    ];

    if (user) {
      navigationItems.push(
        {
          path: `${RoutePath.PROFILE}/${user.id}`,
          text: 'NAVIGATION.PROFILE',
          Icon: ProfileIcon,
          authOnly: true,
        },
        {
          path: RoutePath.ARTICLES,
          text: 'NAVIGATION.ARTICLES',
          Icon: ArticleIcon,
          authOnly: true,
        },
      );
    }

    return navigationItems;
  },
);
