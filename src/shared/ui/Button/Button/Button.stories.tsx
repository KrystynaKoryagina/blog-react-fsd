import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'shared/lib/contexts/theme';
import { Button, ButtonProps } from './Button';
import { ButtonSize, ButtonType } from '../types/button';

// TODO переписать

export default {
  title: 'shared/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
  variant: ButtonType.PRIMARY,
};

export const PrimaryInverted = Template.bind({});
PrimaryInverted.args = {
  children: 'Button',
  variant: ButtonType.PRIMARY_INVERTED,
};

export const Ghost = Template.bind({});
Ghost.args = {
  children: 'Button',
  variant: ButtonType.GHOST,
};

export const GhostDark = Template.bind({});
GhostDark.args = {
  children: 'Button',
  variant: ButtonType.GHOST,
};
GhostDark.parameters = { theme: Theme.DARK };

export const GhostInverted = Template.bind({});
GhostInverted.args = {
  children: 'Button',
  variant: ButtonType.GHOST_INVERTED,
};

export const GhostInvertedDark = Template.bind({});
GhostInvertedDark.args = {
  children: 'Button',
  variant: ButtonType.GHOST_INVERTED,
};
GhostInvertedDark.parameters = { theme: Theme.DARK };

export const Outline = Template.bind({});
Outline.args = {
  children: 'Button',
  variant: ButtonType.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Button',
  variant: ButtonType.OUTLINE,
};
OutlineDark.parameters = { theme: Theme.DARK };

export const OutlineSizeMd = Template.bind({});
OutlineSizeMd.args = {
  children: 'Button',
  variant: ButtonType.OUTLINE,
  size: ButtonSize.MD,
};

export const OutlineSizeLg = Template.bind({});
OutlineSizeLg.args = {
  children: 'Button',
  variant: ButtonType.OUTLINE,
  size: ButtonSize.LG,
};

export const Square = (args: ButtonProps) => (
  <>
    <div>Size sm</div>
    <Button variant={ButtonType.PRIMARY_INVERTED} size={ButtonSize.SM} square {...args}>{'<'}</Button>
    <div>Size md</div>
    <Button variant={ButtonType.PRIMARY_INVERTED} size={ButtonSize.MD} square {...args}>{'<'}</Button>
    <div>Size sm</div>
    <Button variant={ButtonType.PRIMARY_INVERTED} size={ButtonSize.SM} square {...args}>{'<'}</Button>
  </>
);

// TODO
// сделать для кнопок dark theme
