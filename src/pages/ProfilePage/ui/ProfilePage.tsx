import { EditProfileCard } from 'features/EditProfileCard';
import { memo } from 'react';
import { Page } from 'widgets/Page';

const ProfilePage = memo(() => (
  <Page>
    <EditProfileCard />
  </Page>
));

export default ProfilePage;
