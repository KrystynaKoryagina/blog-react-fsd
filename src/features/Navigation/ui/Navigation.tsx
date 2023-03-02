import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routes/routes';
import { AppLink } from 'shared/ui/AppLink';
import styles from './Navigation.module.scss';

export function Navigation() {
  const { t } = useTranslation();

  return (
    <nav className={styles.Navigation}>
      <AppLink to={RoutePath.MAIN}>{t('NAVIGATION.MAIN')}</AppLink>
      <AppLink to={RoutePath.ABOUT}>{t('NAVIGATION.ABOUT')}</AppLink>
    </nav>
  );
}
