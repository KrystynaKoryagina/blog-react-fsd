import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from '@/shared/assets/tests/avatar-storybook.jpg';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 100,
  src: AvatarImg,
};

export const Small = Template.bind({});
Small.args = {
  size: 50,
  src: AvatarImg,
};
