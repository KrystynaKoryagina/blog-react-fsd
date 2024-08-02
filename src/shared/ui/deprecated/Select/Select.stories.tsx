import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/lib/contexts/theme';

import { Select } from './Select';
import { SelectOption } from './types/select';

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

const selectOptions: SelectOption<string>[] = [
  { value: '1', content: 'First' },
  { value: '2', content: 'Second' },
  { value: '3', content: 'Third' },
];

export const Light: Story = {
  render: () => (
    <>
      <Select options={selectOptions} label="Select the option" />

      <pre>
        <code
          style={{
            display: 'block',
            padding: '10px',
            fontSize: '12px',
            color: '#8E8A89',
          }}
        >
          {'<Select options={selectOptions} label="Select the option" />'}
        </code>
      </pre>
    </>
  ),
};

export const Dark: Story = {
  render: () => (
    <>
      <Select options={selectOptions} label="Select the option" />

      <pre>
        <code
          style={{
            display: 'block',
            padding: '10px',
            fontSize: '12px',
            color: '#8E8A89',
          }}
        >
          {'<Select options={selectOptions} label="Select the option" />'}
        </code>
      </pre>
    </>
  ),
};
Dark.parameters = { theme: Theme.DARK };
