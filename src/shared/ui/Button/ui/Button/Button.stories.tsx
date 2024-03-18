import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/lib/contexts/theme';

import { Button } from './Button';
import { ButtonSize, ButtonType } from '../../consts/button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '15px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const LightSolid: Story = {
  render: () => (
    <>
      <Button variant={ButtonType.SOLID} size={ButtonSize.SM}>
        Click me
      </Button>
      <Button variant={ButtonType.SOLID} size={ButtonSize.MD}>
        Click me
      </Button>
      <Button variant={ButtonType.SOLID} size={ButtonSize.LG}>
        Click me
      </Button>
      <Button variant={ButtonType.SOLID} size={ButtonSize.SM} disabled>
        Click me
      </Button>
    </>
  ),
};

export const DarkSolid: Story = {
  render: () => (
    <>
      <Button variant={ButtonType.SOLID} size={ButtonSize.SM}>
        Click me
      </Button>
      <Button variant={ButtonType.SOLID} size={ButtonSize.MD}>
        Click me
      </Button>
      <Button variant={ButtonType.SOLID} size={ButtonSize.LG}>
        Click me
      </Button>
      <Button variant={ButtonType.SOLID} size={ButtonSize.SM} disabled>
        Click me
      </Button>
    </>
  ),
};
DarkSolid.parameters = { theme: Theme.DARK };

export const LightOutline: Story = {
  render: () => (
    <>
      <Button variant={ButtonType.OUTLINE} size={ButtonSize.SM}>
        Click me
      </Button>
      <Button variant={ButtonType.OUTLINE} size={ButtonSize.MD}>
        Click me
      </Button>
      <Button variant={ButtonType.OUTLINE} size={ButtonSize.LG}>
        Click me
      </Button>
      <Button variant={ButtonType.OUTLINE} size={ButtonSize.SM} disabled>
        Click me
      </Button>
    </>
  ),
};

export const DarkOutline: Story = {
  render: () => (
    <>
      <Button variant={ButtonType.OUTLINE} size={ButtonSize.SM}>
        Click me
      </Button>
      <Button variant={ButtonType.OUTLINE} size={ButtonSize.MD}>
        Click me
      </Button>
      <Button variant={ButtonType.OUTLINE} size={ButtonSize.LG}>
        Click me
      </Button>
      <Button variant={ButtonType.OUTLINE} size={ButtonSize.SM} disabled>
        Click me
      </Button>
    </>
  ),
};
DarkOutline.parameters = { theme: Theme.DARK };

export const LightGhost: Story = {
  render: () => (
    <>
      <Button variant={ButtonType.GHOST} size={ButtonSize.SM}>
        Click me
      </Button>
      <Button variant={ButtonType.GHOST} size={ButtonSize.MD}>
        Click me
      </Button>
      <Button variant={ButtonType.GHOST} size={ButtonSize.LG}>
        Click me
      </Button>
      <Button variant={ButtonType.GHOST} size={ButtonSize.SM} disabled>
        Click me
      </Button>
    </>
  ),
};

export const DarkGhost: Story = {
  render: () => (
    <>
      <Button variant={ButtonType.GHOST} size={ButtonSize.SM}>
        Click me
      </Button>
      <Button variant={ButtonType.GHOST} size={ButtonSize.MD}>
        Click me
      </Button>
      <Button variant={ButtonType.GHOST} size={ButtonSize.LG}>
        Click me
      </Button>
      <Button variant={ButtonType.GHOST} size={ButtonSize.SM} disabled>
        Click me
      </Button>
    </>
  ),
};
DarkGhost.parameters = { theme: Theme.DARK };
