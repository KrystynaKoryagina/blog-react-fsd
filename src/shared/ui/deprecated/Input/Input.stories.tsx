import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/lib/contexts/theme';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Light: Story = {
  render: () => <Input label="Label" value="Some value" autoFocus />,
};

export const Dark: Story = {
  render: () => <Input label="Label" value="Some value" autoFocus />,
};
Dark.parameters = { theme: Theme.DARK };
