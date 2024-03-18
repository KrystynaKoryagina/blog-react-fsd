import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/lib/contexts/theme';

import { Code } from './Code';

const meta: Meta<typeof Code> = {
  title: 'shared/Code',
  component: Code,
};

export default meta;
type Story = StoryObj<typeof Code>;

const value =
  '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;';

export const Light: Story = {
  render: () => <Code value={value} />,
};

export const Dark: Story = {
  render: () => <Code value={value} />,
};
Dark.parameters = { theme: Theme.DARK };
