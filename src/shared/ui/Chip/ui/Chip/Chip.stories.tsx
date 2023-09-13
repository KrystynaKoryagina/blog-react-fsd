import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'shared/lib/contexts/theme';

import { Chip } from './Chip';
import { ChipContent } from '../../types/chip';
import { ChipType } from '../../consts/chip';

const meta: Meta<typeof Chip> = {
  title: 'shared/Chip',
  component: Chip,
};

export default meta;
type Story = StoryObj<typeof Chip>;

const content: ChipContent<string> = {
  id: '1',
  value: 'First',
  displayName: 'First',
};

export const Primary: Story = {
  render: () => (
    <>
      <h3>Primary</h3>
      <div style={{ width: '100px' }}>
        <Chip content={content} />
      </div>

      <hr style={{
        height: '1px', backgroundColor: '#8E8A89', marginTop: '10px', marginBottom: '15px',
      }}
      />

      <h3>Primary Selected</h3>
      <div style={{ width: '100px' }}>
        <Chip content={content} isSelected />
      </div>
    </>
  ),
};

export const PrimaryDark: Story = {
  render: () => (
    <>
      <h3>Primary</h3>
      <div style={{ width: '100px' }}>
        <Chip content={content} />
      </div>

      <hr style={{
        height: '1px', backgroundColor: '#8E8A89', marginTop: '10px', marginBottom: '15px',
      }}
      />

      <h3>Primary Selected</h3>
      <div style={{ width: '100px' }}>
        <Chip content={content} isSelected />
      </div>
    </>
  ),
};
PrimaryDark.parameters = { theme: Theme.DARK };

export const Outline: Story = {
  render: () => (
    <>
      <h3>Outline</h3>
      <div style={{ width: '100px' }}>
        <Chip content={content} variant={ChipType.OUTLINE} />
      </div>

      <hr style={{
        height: '1px', backgroundColor: '#8E8A89', marginTop: '10px', marginBottom: '15px',
      }}
      />

      <h3>Outline Selected</h3>
      <div style={{ width: '100px' }}>
        <Chip content={content} variant={ChipType.OUTLINE} isSelected />
      </div>
    </>
  ),
};

export const OutlineDark: Story = {
  render: () => (
    <>
      <h3>Outline</h3>
      <div style={{ width: '100px' }}>
        <Chip content={content} variant={ChipType.OUTLINE} />
      </div>

      <hr style={{
        height: '1px', backgroundColor: '#8E8A89', marginTop: '10px', marginBottom: '15px',
      }}
      />

      <h3>Outline Selected</h3>
      <div style={{ width: '100px' }}>
        <Chip content={content} variant={ChipType.OUTLINE} isSelected />
      </div>
    </>
  ),
};
OutlineDark.parameters = { theme: Theme.DARK };
