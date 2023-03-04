/* eslint-disable i18next/no-literal-string */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'shared/lib/contexts/theme';
import { Button } from './Button';
import { ButtonSize, ButtonType } from './types/Button.types';

export default {
  title: 'shared/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
  variant: ButtonType.PRIMARY,
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
OutlineDark.parameters = { theme: Theme.DARK };

export const OutlineSizeMd = Template.bind({});
OutlineSizeMd.args = {
  children: 'Text',
  variant: ButtonType.OUTLINE,
  size: ButtonSize.MD,
};

export const OutlineSizeLg = Template.bind({});
OutlineSizeLg.args = {
  children: 'Text',
  variant: ButtonType.OUTLINE,
  size: ButtonSize.LG,
};

export const Square = (args) => (
  <>
    <div>Size sm</div>
    <Button variant={ButtonType.SECONDARY} size={ButtonSize.SM} square {...args}>{'<'}</Button>
    <div>Size md</div>
    <Button variant={ButtonType.SECONDARY} size={ButtonSize.MD} square {...args}>{'<'}</Button>
    <div>Size sm</div>
    <Button variant={ButtonType.SECONDARY} size={ButtonSize.SM} square {...args}>{'<'}</Button>
  </>
);

// TODO
// сделать для кнопок dark theme
