import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from '@/widgets/Page';

const AdminPanel = () => {
  const { t } = useTranslation('admin');

  return (
    <Page data-testid='admin-page'>
      {t('ADMIN_PAGE')}
    </Page>
  );
};

export default memo(AdminPanel);
