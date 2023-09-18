import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { Page } from '@/widgets/Page';

const MainPage = memo(() => {
  const { t } = useTranslation('main');

  return (
    <Page>
      {t('MAIN_PAGE')}
    </Page>
  );
});

export default MainPage;
