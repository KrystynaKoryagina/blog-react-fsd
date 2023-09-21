import { useTranslation } from 'react-i18next';
import styles from './NotFoundPage.module.scss';
import { Page } from '@/widgets/Page';

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <Page data-testid='not-found-page' className={styles.NotFoundPage}>
      {t('NOT_FOUND_PAGE')}
    </Page>
  );
};
