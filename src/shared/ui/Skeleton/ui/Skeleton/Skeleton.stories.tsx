import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/lib/contexts/theme';

import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'shared/Skeleton',
  component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Light: Story = {
  render: () => (
    <Skeleton />
  ),
};

export const Dark: Story = {
  render: () => (
    <Skeleton />
  ),
};
Dark.parameters = { theme: Theme.DARK };

export const Circle: Story = {
  render: () => (
    <>
      <Skeleton borderRadius='50%' width={100} height={100} />

      <pre>
        <code style={{
          display: 'block', padding: '10px', fontSize: '12px', color: '#8E8A89',
        }}
        >
          {'<Skeleton borderRadius="50%" width={100} height={100} />'}
        </code>
      </pre>
    </>
  ),
};

export const CircleDark: Story = {
  render: () => (
    <>
      <Skeleton borderRadius='50%' width={100} height={100} />

      <pre>
        <code style={{
          display: 'block', padding: '10px', fontSize: '12px', color: '#8E8A89',
        }}
        >
          {'<Skeleton borderRadius="50%" width={100} height={100} />'}
        </code>
      </pre>
    </>
  ),
};
CircleDark.parameters = { theme: Theme.DARK };
