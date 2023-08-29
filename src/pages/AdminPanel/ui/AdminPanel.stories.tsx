import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'shared/lib/contexts/theme';
import AdminPanel from './AdminPanel';

export default {
  title: 'pages/AdminPanel',
  component: AdminPanel,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AdminPanel>;

const Template: ComponentStory<typeof AdminPanel> = () => <AdminPanel />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.parameters = { theme: Theme.DARK };
