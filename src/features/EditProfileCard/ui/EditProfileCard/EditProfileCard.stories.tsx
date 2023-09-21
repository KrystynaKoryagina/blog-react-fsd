import type { Meta, StoryObj } from '@storybook/react';
import avatar from '@/shared/assets/tests/avatar-storybook.jpg';
import { EditProfileCard } from './EditProfileCard';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { User, UserRole } from '@/entities/User';
import { Theme } from '@/shared/lib/contexts/theme';
import { ValidateProfileError } from '../../model/types/editProfile';
import { PROFILE_MOCK } from '@/entities/Profile';

const user: User = {
  id: '1',
  username: 'username',
  role: UserRole.USER,
  avatar,
};

const meta: Meta<typeof EditProfileCard> = {
  title: 'features/EditProfileCard',
  component: EditProfileCard,
};

export default meta;
type Story = StoryObj<typeof EditProfileCard>;

export const LightReadonly: Story = {
  render: () => (
    <EditProfileCard id='1' />
  ),
};
LightReadonly.decorators = [StoreDecorator({
  profile: {
    data: PROFILE_MOCK,
    editData: PROFILE_MOCK,
  },
  user: {
    authData: user,
  },
})];

export const DarkReadonly: Story = {
  render: () => (
    <EditProfileCard id='1' />
  ),
};
DarkReadonly.decorators = [StoreDecorator({
  profile: {
    data: PROFILE_MOCK,
    editData: PROFILE_MOCK,
  },
  user: {
    authData: user,
  },
})];
DarkReadonly.parameters = { theme: Theme.DARK };

export const LightEdit: Story = {
  render: () => (
    <EditProfileCard id='1' />
  ),
};
LightEdit.decorators = [StoreDecorator({
  profile: {
    data: PROFILE_MOCK,
    editData: PROFILE_MOCK,
    readOnly: false,
  },
  user: {
    authData: user,
  },
})];

export const DarkEdit: Story = {
  render: () => (
    <EditProfileCard id='1' />
  ),
};
DarkEdit.decorators = [StoreDecorator({
  profile: {
    data: PROFILE_MOCK,
    editData: PROFILE_MOCK,
    readOnly: false,
  },
  user: {
    authData: user,
  },
})];
DarkEdit.parameters = { theme: Theme.DARK };

export const LightNotEdit: Story = {
  render: () => (
    <EditProfileCard id='1' />
  ),
};
LightNotEdit.decorators = [StoreDecorator({
  profile: {
    data: { ...PROFILE_MOCK, id: '2' },
    editData: PROFILE_MOCK,
    readOnly: false,
  },
  user: {
    authData: user,
  },
})];

export const DarkNotEdit: Story = {
  render: () => (
    <EditProfileCard id='1' />
  ),
};
DarkNotEdit.decorators = [StoreDecorator({
  profile: {
    data: { ...PROFILE_MOCK, id: '2' },
    editData: PROFILE_MOCK,
    readOnly: false,
  },
  user: {
    authData: user,
  },
})];
DarkEdit.parameters = { theme: Theme.DARK };

export const LightError: Story = {
  render: () => (
    <EditProfileCard id='1' />
  ),
};
LightError.decorators = [StoreDecorator({
  profile: {
    data: PROFILE_MOCK,
    editData: {},
    readOnly: false,
    validateErrors: [
      ValidateProfileError.NO_DATA,
    ],
  },
  user: {
    authData: user,
  },
})];

export const DarkError: Story = {
  render: () => (
    <EditProfileCard id='1' />
  ),
};
DarkError.decorators = [StoreDecorator({
  profile: {
    data: PROFILE_MOCK,
    editData: {},
    readOnly: false,
    validateErrors: [
      ValidateProfileError.NO_DATA,
    ],
  },
  user: {
    authData: user,
  },
})];
DarkError.parameters = { theme: Theme.DARK };
