import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleCategoryFilter } from './ArticleCategoryFilter';

export default {
  title: 'features/ArticleCategoryFilter',
  component: ArticleCategoryFilter,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleCategoryFilter>;

const Template: ComponentStory<typeof ArticleCategoryFilter> = (args) => (
  <ArticleCategoryFilter {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
