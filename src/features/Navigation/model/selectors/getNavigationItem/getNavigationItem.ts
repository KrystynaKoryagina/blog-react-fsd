import { createSelector } from 'reselect';
import { UnleashClient } from '@unleash/proxy-client-react';
import { StoreSchema } from '@/app/providers/store';
// import MainIcon from '@/shared/assets/icons/main.svg';
// import AboutIcon from '@/shared/assets/icons/about.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/deprecated/profile.svg';
import ArticleIconDeprecated from '@/shared/assets/icons/deprecated/article.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import { getRouteArticles, getRouteProfile } from '@/shared/constants/routes';
import { toggleFeature } from '@/shared/lib/utils/toggleFeature';
import { NavigationLink } from '../../types/navigation';

const authData = (state: StoreSchema) => state?.user.authData;

export const getNavigationItems = (client: UnleashClient) =>
  createSelector(authData, (user) => {
    const navigationItems: NavigationLink[] = [
      {
        path: getRouteArticles(),
        text: 'NAVIGATION.ARTICLES',
        Icon: toggleFeature({
          featureName: 'isRedesignEnable',
          off: () => ArticleIconDeprecated,
          on: () => ArticleIcon,
          client,
        }),
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
          Icon: toggleFeature({
            featureName: 'isRedesignEnable',
            off: () => ProfileIconDeprecated,
            on: () => ProfileIcon,
            client,
          }),
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
