import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'shared/lib/contexts/theme';
import { Input } from './Input';

export default {
  title: 'shared/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Light = Template.bind({});
Light.args = {
  labelText: 'Label',
  value: 'Some value',
  autoFocus: true,
};

export const Dark = Template.bind({});
Dark.args = {
  labelText: 'Label',
  value: 'Some value',
  autoFocus: true,
};
Dark.parameters = { theme: Theme.DARK };
