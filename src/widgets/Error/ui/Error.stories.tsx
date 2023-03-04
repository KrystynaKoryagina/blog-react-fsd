import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'shared/lib/contexts/theme';
import { Error } from './Error';

export default {
  title: 'widget/Error',
  component: Error,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = (args) => <Error {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.parameters = { theme: Theme.DARK };
