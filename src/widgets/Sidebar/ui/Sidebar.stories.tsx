import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'shared/lib/contexts/theme';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { Sidebar } from './Sidebar';

export default {
  title: 'widget/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = () => (
  <Sidebar />
);

export const Light = Template.bind({});
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.parameters = { theme: Theme.DARK };
Dark.decorators = [StoreDecorator({})];
