import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/lib/contexts/theme';
import { ProfileCard } from './ProfileCard';
import { PROFILE_MOCK } from '../../model/const/profile.mock';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const LightReadonly: Story = {
  render: () => <ProfileCard data={PROFILE_MOCK} readOnly />,
};

export const DarkReadonly: Story = {
  render: () => <ProfileCard data={PROFILE_MOCK} readOnly />,
};
DarkReadonly.parameters = { theme: Theme.DARK };

export const LightEdit: Story = {
  render: () => <ProfileCard data={PROFILE_MOCK} />,
};

export const DarkEdit: Story = {
  render: () => <ProfileCard data={PROFILE_MOCK} />,
};
DarkEdit.parameters = { theme: Theme.DARK };

export const LightLoading: Story = {
  render: () => <ProfileCard data={PROFILE_MOCK} isLoading />,
};

export const DarkLoading: Story = {
  render: () => <ProfileCard data={PROFILE_MOCK} isLoading />,
};
DarkLoading.parameters = { theme: Theme.DARK };

export const LightError: Story = {
  render: () => <ProfileCard data={PROFILE_MOCK} error />,
};

export const DarkError: Story = {
  render: () => <ProfileCard data={PROFILE_MOCK} error />,
};
DarkError.parameters = { theme: Theme.DARK };
