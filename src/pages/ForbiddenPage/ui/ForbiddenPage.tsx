import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

export const ForbiddenPage = () => {
  const { t } = useTranslation();

  return (
    <Page data-testid='forbidden-page'>
      {t('DO_NOT_HAVE_ACCESS')}
    </Page>
  );
};
