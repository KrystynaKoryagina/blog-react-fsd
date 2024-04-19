import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/lib/contexts/theme';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { SidebarDeprecated } from './SidebarDeprecated';

export default {
  title: 'widget/Sidebar',
  component: SidebarDeprecated,
} as ComponentMeta<typeof SidebarDeprecated>;

const Template: ComponentStory<typeof SidebarDeprecated> = () => (
  <SidebarDeprecated />
);

export const Light = Template.bind({});
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.parameters = { theme: Theme.DARK };
Dark.decorators = [StoreDecorator({})];
