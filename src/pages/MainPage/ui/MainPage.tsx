import { BugButton } from 'app/BugButton';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = memo(() => {
  const { t } = useTranslation('main');

  return (
    <div>
      {t('MainPage')}
      <BugButton />
    </div>
  );
});

export default MainPage;
