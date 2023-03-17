import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'shared/lib/contexts/theme';
import { Text } from './Text';
import { TextType } from './types/Text.types';

export default {
  title: 'shared/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
};
PrimaryDark.parameters = { theme: Theme.DARK };

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  variant: TextType.SECONDARY,
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  variant: TextType.SECONDARY,
};
SecondaryDark.parameters = { theme: Theme.DARK };

export const Error = Template.bind({});
Error.args = {
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  variant: TextType.ERROR,
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  variant: TextType.ERROR,
};
ErrorDark.parameters = { theme: Theme.DARK };
