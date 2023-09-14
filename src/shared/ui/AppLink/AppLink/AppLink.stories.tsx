import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/shared/lib/contexts/theme';
import { AppLink } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
  <AppLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
  // theme: AppLinkTheme.PRIMARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Text',
  // theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.parameters = { theme: Theme.DARK };
