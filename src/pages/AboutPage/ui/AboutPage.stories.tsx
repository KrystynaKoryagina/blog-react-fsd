import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'shared/lib/contexts/theme';
import AboutPage from './AboutPage';

export default {
  title: 'pages/AboutPage',
  component: AboutPage,
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.parameters = { theme: Theme.DARK };
