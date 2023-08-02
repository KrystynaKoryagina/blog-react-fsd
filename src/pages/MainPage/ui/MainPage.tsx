import { BugButton } from 'app/BugButton';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';

const MainPage = memo(() => {
  const { t } = useTranslation('main');

  return (
    <Page>
      {t('MAIN_PAGE')}
      <BugButton />
    </Page>
  );
});

export default MainPage;
