import { RoutePath } from 'shared/config/routes/routes';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { NavigationLink } from '../types/navigation';

export const NavigationList: NavigationLink[] = [
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
  {
    path: RoutePath.PROFILE,
    text: 'NAVIGATION.PROFILE',
    Icon: ProfileIcon,
    authOnly: true,
  },
];
