import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'shared/lib/contexts/theme';
import ArticlesPage from './ArticlesPage';

export default {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = () => (
  <ArticlesPage />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.parameters = { theme: Theme.DARK };
