import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routes/routes';
import { AppLink } from 'shared/ui/AppLink';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import { classNames } from 'shared/lib/classNames';
import styles from './Navigation.module.scss';

export interface NavigationProps {
  collapsed: boolean;
}

export const Navigation: FC<NavigationProps> = ({ collapsed }) => {
  const { t } = useTranslation();

  return (
    <nav className={classNames(styles.Navigation, [], {
      [styles.collapsed]: collapsed,
    })}
    >
      <AppLink className={styles.navLink} to={RoutePath.MAIN}>
        <MainIcon className={styles.navIcon} />
        <span className={styles.navName}>{t('NAVIGATION.MAIN')}</span>
      </AppLink>
      <AppLink className={styles.navLink} to={RoutePath.ABOUT}>
        <AboutIcon className={styles.navIcon} />
        <span className={styles.navName}>{t('NAVIGATION.ABOUT')}</span>
      </AppLink>
    </nav>
  );
};
