import { Meta, StoryObj } from '@storybook/react';
import { UIAvatar } from './UIAvatar';
import AvatarImg from '@/shared/assets/tests/avatar-storybook.jpg';

const meta: Meta<typeof UIAvatar> = {
  title: 'shared/Avatar',
  component: UIAvatar,
  decorators: [(Story) => <Story />],
};

export default meta;
type Story = StoryObj<typeof UIAvatar>;

export const Light: Story = {
  args: {
    src: AvatarImg,
    size: 100,
  },
};
