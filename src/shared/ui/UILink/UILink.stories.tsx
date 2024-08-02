import { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/shared/lib/contexts/theme';
import { UILink } from './UILink';

const meta: Meta<typeof UILink> = {
  title: 'shared/Link',
  component: UILink,
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof UILink>;

export const Light: Story = {
  render: () => <UILink to="/">Link</UILink>,
};

export const Dark: Story = {
  render: () => <UILink to="/">Link</UILink>,
};
Dark.parameters = { theme: Theme.DARK };
