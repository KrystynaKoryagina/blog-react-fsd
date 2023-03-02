import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'shared/lib/contexts/theme';
import { Button, ButtonType } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Ghost = Template.bind({});
Ghost.args = {
  children: 'Text',
  variant: ButtonType.GHOST,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  variant: ButtonType.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  variant: ButtonType.OUTLINE,
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
