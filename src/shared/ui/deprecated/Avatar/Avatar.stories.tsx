import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from '@/shared/assets/tests/avatar-storybook.jpg';

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
  decorators: [(Story) => <Story />],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Light: Story = {
  args: {
    src: AvatarImg,
    size: 100,
  },
};
