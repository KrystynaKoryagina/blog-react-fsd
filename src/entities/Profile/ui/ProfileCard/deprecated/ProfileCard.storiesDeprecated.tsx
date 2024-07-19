import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/lib/contexts/theme';
import { ProfileCardDeprecated } from './ProfileCardDeprecated';
import { PROFILE_MOCK } from '../../../model/const/profile.mock';

const meta: Meta<typeof ProfileCardDeprecated> = {
  title: 'entities/ProfileCard',
  component: ProfileCardDeprecated,
};

export default meta;
type Story = StoryObj<typeof ProfileCardDeprecated>;

export const LightReadonly: Story = {
  render: () => <ProfileCardDeprecated data={PROFILE_MOCK} readOnly />,
};

export const DarkReadonly: Story = {
  render: () => <ProfileCardDeprecated data={PROFILE_MOCK} readOnly />,
};
DarkReadonly.parameters = { theme: Theme.DARK };

export const LightEdit: Story = {
  render: () => <ProfileCardDeprecated data={PROFILE_MOCK} />,
};

export const DarkEdit: Story = {
  render: () => <ProfileCardDeprecated data={PROFILE_MOCK} />,
};
DarkEdit.parameters = { theme: Theme.DARK };

export const LightLoading: Story = {
  render: () => <ProfileCardDeprecated data={PROFILE_MOCK} isLoading />,
};

export const DarkLoading: Story = {
  render: () => <ProfileCardDeprecated data={PROFILE_MOCK} isLoading />,
};
DarkLoading.parameters = { theme: Theme.DARK };

export const LightError: Story = {
  render: () => <ProfileCardDeprecated data={PROFILE_MOCK} error />,
};

export const DarkError: Story = {
  render: () => <ProfileCardDeprecated data={PROFILE_MOCK} error />,
};
DarkError.parameters = { theme: Theme.DARK };
