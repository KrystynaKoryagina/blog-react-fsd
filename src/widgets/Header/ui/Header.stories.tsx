import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'shared/lib/contexts/theme';
import { Header } from './Header';

export default {
  title: 'widget/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.parameters = { theme: Theme.DARK };
