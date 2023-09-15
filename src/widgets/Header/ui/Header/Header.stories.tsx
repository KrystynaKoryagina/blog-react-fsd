import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { Theme } from '@/shared/lib/contexts/theme';
import { Header } from './Header';

export default {
  title: 'widget/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const LightNoUser = Template.bind({});
LightNoUser.args = {};
LightNoUser.decorators = [StoreDecorator({
  user: { authData: null },
})];

export const DarkNoUser = Template.bind({});
DarkNoUser.args = {};
DarkNoUser.parameters = { theme: Theme.DARK };
DarkNoUser.decorators = [StoreDecorator({
  user: { authData: null },
})];

export const LightUser = Template.bind({});
LightUser.args = {};
LightUser.decorators = [StoreDecorator({
  user: { authData: { id: '12345678', username: 'Username' } },
})];

export const DarkUser = Template.bind({});
DarkUser.args = {};
DarkUser.parameters = { theme: Theme.DARK };
DarkUser.decorators = [StoreDecorator({
  user: { authData: { id: '12345678', username: 'Username' } },
})];
