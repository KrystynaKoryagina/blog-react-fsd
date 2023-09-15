import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/shared/lib/contexts/theme';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
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
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.parameters = { theme: Theme.DARK };
Dark.decorators = [StoreDecorator({})];
