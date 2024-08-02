import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/lib/contexts/theme';
import { Button, ButtonType } from '@/shared/ui/deprecated/Button';

import { DropdownMenu } from './DropdownMenu';
import { DropdownItem } from './types/dropdownMenu';

const meta: Meta<typeof DropdownMenu> = {
  title: 'shared/DropdownMenu',
  component: DropdownMenu,
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

const items: DropdownItem[] = [
  { id: '1', content: 'Option 1' },
  { id: '2', content: 'Option 2' },
  { id: '3', content: 'Option 3' },
  { id: '4', content: 'Option 4' },
];

const triggerBtn = <Button style={{ width: '100%' }}>Click Me</Button>;

export const Light: Story = {
  render: () => (
    <>
      <h3>Bottom Left</h3>
      <div style={{ width: '200px' }}>
        <DropdownMenu items={items} trigger={triggerBtn} />
      </div>

      <hr
        style={{
          height: '1px',
          backgroundColor: '#8E8A89',
          marginTop: '10px',
          marginBottom: '15px',
        }}
      />

      <h3>Bottom Right</h3>
      <div style={{ width: '200px' }}>
        <DropdownMenu
          direction="bottom right"
          items={items}
          trigger={triggerBtn}
        />
      </div>

      <hr
        style={{
          height: '1px',
          backgroundColor: '#8E8A89',
          marginTop: '10px',
          marginBottom: '15px',
        }}
      />

      <h3>Top Left</h3>
      <div style={{ width: '200px' }}>
        <DropdownMenu direction="top left" items={items} trigger={triggerBtn} />
      </div>

      <hr
        style={{
          height: '1px',
          backgroundColor: '#8E8A89',
          marginTop: '10px',
          marginBottom: '15px',
        }}
      />

      <h3>Top Right</h3>
      <div style={{ width: '200px' }}>
        <DropdownMenu
          direction="top right"
          items={items}
          trigger={triggerBtn}
        />
      </div>
    </>
  ),
};

export const Dark: Story = {
  render: () => (
    <>
      <h3>Bottom Left</h3>
      <div style={{ width: '200px' }}>
        <DropdownMenu items={items} trigger={triggerBtn} />
      </div>

      <hr
        style={{
          height: '1px',
          backgroundColor: '#8E8A89',
          marginTop: '10px',
          marginBottom: '15px',
        }}
      />

      <h3>Bottom Right</h3>
      <div style={{ width: '200px' }}>
        <DropdownMenu
          direction="bottom right"
          items={items}
          trigger={triggerBtn}
        />
      </div>

      <hr
        style={{
          height: '1px',
          backgroundColor: '#8E8A89',
          marginTop: '10px',
          marginBottom: '15px',
        }}
      />

      <h3>Top Left</h3>
      <div style={{ width: '200px' }}>
        <DropdownMenu direction="top left" items={items} trigger={triggerBtn} />
      </div>

      <hr
        style={{
          height: '1px',
          backgroundColor: '#8E8A89',
          marginTop: '10px',
          marginBottom: '15px',
        }}
      />

      <h3>Top Right</h3>
      <div style={{ width: '200px' }}>
        <DropdownMenu
          direction="top right"
          items={items}
          trigger={triggerBtn}
        />
      </div>
    </>
  ),
};
Dark.parameters = { theme: Theme.DARK };
