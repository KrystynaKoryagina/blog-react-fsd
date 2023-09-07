import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'shared/lib/contexts/theme';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import ArticleDetailsPage from './ArticleDetailsPage';

export default {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = () => (
  <ArticleDetailsPage />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.parameters = { theme: Theme.DARK };
Dark.decorators = [StoreDecorator({})];
