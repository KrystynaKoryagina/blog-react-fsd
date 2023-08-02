import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'shared/lib/contexts/theme';
import { Skeleton } from './Skeleton';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.parameters = { theme: Theme.DARK };

export const Color = Template.bind({});
Color.args = {};
Color.parameters = { theme: Theme.COLOR };

export const Circle = Template.bind({});
Circle.args = {
  borderRadius: '50%',
  width: 100,
  height: 100,
};
