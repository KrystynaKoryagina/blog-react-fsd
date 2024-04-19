import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/lib/contexts/theme';

import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'shared/Spinner',
  component: Spinner,
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Light: Story = {
  render: () => <Spinner />,
};

export const Dark: Story = {
  render: () => <Spinner />,
};
Dark.parameters = { theme: Theme.DARK };
