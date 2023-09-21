import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { EditProfileCard } from '@/features/EditProfileCard';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/Text';

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();

  const { t } = useTranslation(['translation', 'profile']);

  if (!id) {
    return <Text>{t('NOT_FOUND', { ns: 'profile' })}</Text>;
  }

  return (
    <Page data-testid='profile-page'>
      <EditProfileCard id={id} />
    </Page>
  );
};

export default memo(ProfilePage);
