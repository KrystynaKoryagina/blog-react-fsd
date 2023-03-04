import { BugButton } from 'app/BugButton';
import { useTranslation } from 'react-i18next';

function MainPage() {
  const { t } = useTranslation('main');

  return (
    <div>
      {t('MainPage')}
      <BugButton />
    </div>
  );
}

export default MainPage;
