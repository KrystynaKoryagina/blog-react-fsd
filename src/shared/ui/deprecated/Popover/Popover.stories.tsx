import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/lib/contexts/theme';
import { Button, ButtonType } from '@/shared/ui/deprecated/Button';
import { Card } from '@/shared/ui/deprecated/Card';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';

import { VStack } from '@/shared/ui/Stack';
import { Popover } from './Popover';

const meta: Meta<typeof Popover> = {
  title: 'shared/Popover',
  component: Popover,
};

export default meta;
type Story = StoryObj<typeof Popover>;

const content = (
  <Card>
    <VStack gap="8">
      <Text size={TextSize.SM}>Lorem ipsum.</Text>
      <Text size={TextSize.SM}>Lorem ipsum.</Text>
      <Text size={TextSize.SM}>Lorem ipsum.</Text>
    </VStack>
  </Card>
);

const triggerBtn = <Button style={{ width: '100%' }}>Click Me</Button>;

export const Light: Story = {
  render: () => (
    <>
      <h3>Bottom Right</h3>
      <div style={{ width: '200px' }}>
        <Popover trigger={triggerBtn} direction="bottom right">
          {content}
        </Popover>
      </div>

      <pre>
        <code
          style={{
            display: 'block',
            padding: '10px',
            fontSize: '12px',
            color: '#8E8A89',
          }}
        >
          {'<Popover trigger={<button></button>}>\n {content}\n<Popover />'}
        </code>
      </pre>

      <hr
        style={{
          height: '1px',
          backgroundColor: '#8E8A89',
          marginTop: '10px',
          marginBottom: '15px',
        }}
      />

      <h3>Bottom Left</h3>
      <div style={{ width: '200px' }}>
        <Popover trigger={triggerBtn} direction="bottom left">
          {content}
        </Popover>
      </div>

      <pre>
        <code
          style={{
            display: 'block',
            padding: '10px',
            fontSize: '12px',
            color: '#8E8A89',
          }}
        >
          {
            '<Popover direction="bottom left" trigger={<button></button>}>\n {content}\n<Popover />'
          }
        </code>
      </pre>

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
        <Popover trigger={triggerBtn} direction="top right">
          {content}
        </Popover>
      </div>

      <pre>
        <code
          style={{
            display: 'block',
            padding: '10px',
            fontSize: '12px',
            color: '#8E8A89',
          }}
        >
          {
            '<Popover direction="top right" trigger={<button></button>}>\n {content}\n<Popover />'
          }
        </code>
      </pre>

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
        <Popover trigger={triggerBtn} direction="top left">
          {content}
        </Popover>
      </div>

      <pre>
        <code
          style={{
            display: 'block',
            padding: '10px',
            fontSize: '12px',
            color: '#8E8A89',
          }}
        >
          {
            '<Popover direction="top left" trigger={<button></button>}>\n {content}\n<Popover />'
          }
        </code>
      </pre>
    </>
  ),
};

export const Dark: Story = {
  render: () => (
    <>
      <div style={{ width: '200px' }}>
        <Popover trigger={triggerBtn} direction="bottom left">
          {content}
        </Popover>
      </div>

      <pre>
        <code
          style={{
            display: 'block',
            padding: '10px',
            fontSize: '12px',
            color: '#8E8A89',
          }}
        >
          {
            '<Popover direction="bottom left" trigger={<button></button>}>\n {content}\n<Popover />'
          }
        </code>
      </pre>
    </>
  ),
};
Dark.parameters = { theme: Theme.DARK };
