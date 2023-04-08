import { ProfileStore, profileReducer } from 'entities/Profile';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';

const reducers: ReducersList<ProfileStore> = {
  profile: profileReducer,
};

const ProfilePage = memo(() => {
  const { t } = useTranslation('profile');
  useDynamicModuleLoader({ reducers });

  return (
    <div>{t('PROFILE')}</div>
  );
});

export default ProfilePage;
