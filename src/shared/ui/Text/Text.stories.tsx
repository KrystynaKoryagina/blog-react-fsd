import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'shared/lib/contexts/theme';
import { Text } from './Text';
import { TextType } from './types/Text';

export default {
  title: 'shared/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
};
PrimaryDark.parameters = { theme: Theme.DARK };

export const Secondary = Template.bind({});
Secondary.args = {
  value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  variant: TextType.SECONDARY,
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  variant: TextType.SECONDARY,
};
SecondaryDark.parameters = { theme: Theme.DARK };

export const Error = Template.bind({});
Error.args = {
  value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  variant: TextType.ERROR,
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  variant: TextType.ERROR,
};
ErrorDark.parameters = { theme: Theme.DARK };
