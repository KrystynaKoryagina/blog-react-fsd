import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/lib/contexts/theme';

import { Button } from './Button';
import { ButtonSize, ButtonType } from '../../consts/button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#fff', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Light: Story = {
  render: () => (
    <>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <h3 style={{ color: 'black', width: '200px' }}>Primary</h3>
        <div style={{ display: 'flex', gap: '15px' }}>
          <div>
            <h4 style={{ color: 'black', textAlign: 'center' }}>SM</h4>
            <Button variant={ButtonType.PRIMARY} size={ButtonSize.SM}>Click me</Button>
          </div>
          <div>
            <h4 style={{ color: 'black', textAlign: 'center' }}>MD</h4>
            <Button variant={ButtonType.PRIMARY} size={ButtonSize.MD}>Click me</Button>
          </div>
          <div>
            <h4 style={{ color: 'black', textAlign: 'center' }}>LG</h4>
            <Button variant={ButtonType.PRIMARY} size={ButtonSize.LG}>Click me</Button>
          </div>
          <div>
            <h4 style={{ color: 'black', textAlign: 'center' }}>Disabled</h4>
            <Button variant={ButtonType.PRIMARY} size={ButtonSize.SM} disabled>Click me</Button>
          </div>
        </div>
      </div>

      <hr style={{
        height: '1px', backgroundColor: '#8E8A89', marginTop: '10px', marginBottom: '15px',
      }}
      />

      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <h3 style={{ color: 'black', width: '200px' }}>Primary Inverted</h3>
        <div style={{ display: 'flex', gap: '15px' }}>
          <div>
            <Button variant={ButtonType.PRIMARY_INVERTED} size={ButtonSize.SM}>Click me</Button>
          </div>
          <div>
            <Button variant={ButtonType.PRIMARY_INVERTED} size={ButtonSize.MD}>Click me</Button>
          </div>
          <div>
            <Button variant={ButtonType.PRIMARY_INVERTED} size={ButtonSize.LG}>Click me</Button>
          </div>
          <div>
            <Button variant={ButtonType.PRIMARY_INVERTED} size={ButtonSize.SM} disabled>Click me</Button>
          </div>
        </div>
      </div>

      <hr style={{
        height: '1px', backgroundColor: '#8E8A89', marginTop: '10px', marginBottom: '15px',
      }}
      />

      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <h3 style={{ color: 'black', width: '200px' }}>Outline</h3>
        <div style={{ display: 'flex', gap: '15px' }}>
          <div>
            <Button variant={ButtonType.OUTLINE} size={ButtonSize.SM}>Click me</Button>
          </div>
          <div>
            <Button variant={ButtonType.OUTLINE} size={ButtonSize.MD}>Click me</Button>
          </div>
          <div>
            <Button variant={ButtonType.OUTLINE} size={ButtonSize.LG}>Click me</Button>
          </div>
          <div>
            <Button variant={ButtonType.OUTLINE} size={ButtonSize.SM} disabled>Click me</Button>
          </div>
        </div>
      </div>

      <hr style={{
        height: '1px', backgroundColor: '#8E8A89', marginTop: '10px', marginBottom: '15px',
      }}
      />

      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <h3 style={{ color: 'black', width: '200px' }}>Shost</h3>
        <div style={{ display: 'flex', gap: '15px' }}>
          <div>
            <Button variant={ButtonType.GHOST} size={ButtonSize.SM}>Click me</Button>
          </div>
          <div>
            <Button variant={ButtonType.GHOST} size={ButtonSize.MD}>Click me</Button>
          </div>
          <div>
            <Button variant={ButtonType.GHOST} size={ButtonSize.LG}>Click me</Button>
          </div>
          <div>
            <Button variant={ButtonType.GHOST} size={ButtonSize.SM} disabled>Click me</Button>
          </div>
        </div>
      </div>

      <hr style={{
        height: '1px', backgroundColor: '#8E8A89', marginTop: '10px', marginBottom: '15px',
      }}
      />

      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <h3 style={{ color: 'black', width: '200px' }}>Shost Inverted</h3>
        <div style={{ display: 'flex', gap: '15px' }}>
          <div>
            <Button variant={ButtonType.GHOST_INVERTED} size={ButtonSize.SM}>Click me</Button>
          </div>
          <div>
            <Button variant={ButtonType.GHOST_INVERTED} size={ButtonSize.MD}>Click me</Button>
          </div>
          <div>
            <Button variant={ButtonType.GHOST_INVERTED} size={ButtonSize.LG}>Click me</Button>
          </div>
          <div>
            <Button variant={ButtonType.GHOST_INVERTED} size={ButtonSize.SM} disabled>Click me</Button>
          </div>
        </div>
      </div>

      <hr style={{
        height: '1px', backgroundColor: '#8E8A89', marginTop: '10px', marginBottom: '15px',
      }}
      />

      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <h3 style={{ color: 'black', width: '200px' }}>Square</h3>
        <div style={{ display: 'flex', gap: '15px' }}>
          <div>
            <Button variant={ButtonType.PRIMARY} size={ButtonSize.SM} square>{'<'}</Button>
          </div>
          <div>
            <Button variant={ButtonType.PRIMARY} size={ButtonSize.MD} square>{'<'}</Button>
          </div>
          <div>
            <Button variant={ButtonType.PRIMARY} size={ButtonSize.LG} square>{'<'}</Button>
          </div>
          <div>
            <Button variant={ButtonType.PRIMARY} size={ButtonSize.SM} square disabled>{'<'}</Button>
          </div>
        </div>
      </div>
    </>
  ),
};

export const Dark: Story = {
  render: () => (
    <>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <h3 style={{ color: 'black', width: '200px' }}>Primary</h3>
        <div style={{ display: 'flex', gap: '15px' }}>
          <div>
            <h4 style={{ color: 'black', textAlign: 'center' }}>SM</h4>
            <Button variant={ButtonType.PRIMARY} size={ButtonSize.SM}>Click me</Button>
          </div>
          <div>
            <h4 style={{ color: 'black', textAlign: 'center' }}>MD</h4>
            <Button variant={ButtonType.PRIMARY} size={ButtonSize.MD}>Click me</Button>
          </div>
          <div>
            <h4 style={{ color: 'black', textAlign: 'center' }}>LG</h4>
            <Button variant={ButtonType.PRIMARY} size={ButtonSize.LG}>Click me</Button>
          </div>
          <div>
            <h4 style={{ color: 'black', textAlign: 'center' }}>Disabled</h4>
            <Button variant={ButtonType.PRIMARY} size={ButtonSize.SM} disabled>Click me</Button>
          </div>
        </div>
      </div>

      <hr style={{
        height: '1px', backgroundColor: '#8E8A89', marginTop: '10px', marginBottom: '15px',
      }}
      />

      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <h3 style={{ color: 'black', width: '200px' }}>Primary Inverted</h3>
        <div style={{ display: 'flex', gap: '15px' }}>
          <div>
            <Button variant={ButtonType.PRIMARY_INVERTED} size={ButtonSize.SM}>Click me</Button>
          </div>
          <div>
            <Button variant={ButtonType.PRIMARY_INVERTED} size={ButtonSize.MD}>Click me</Button>
          </div>
          <div>
            <Button variant={ButtonType.PRIMARY_INVERTED} size={ButtonSize.LG}>Click me</Button>
          </div>
          <div>
            <Button variant={ButtonType.PRIMARY_INVERTED} size={ButtonSize.SM} disabled>Click me</Button>
          </div>
        </div>
      </div>

      <hr style={{
        height: '1px', backgroundColor: '#8E8A89', marginTop: '10px', marginBottom: '15px',
      }}
      />

      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <h3 style={{ color: 'black', width: '200px' }}>Outline</h3>
        <div style={{ display: 'flex', gap: '15px' }}>
          <div>
            <Button variant={ButtonType.OUTLINE} size={ButtonSize.SM}>Click me</Button>
          </div>
          <div>
            <Button variant={ButtonType.OUTLINE} size={ButtonSize.MD}>Click me</Button>
          </div>
          <div>
            <Button variant={ButtonType.OUTLINE} size={ButtonSize.LG}>Click me</Button>
          </div>
          <div>
            <Button variant={ButtonType.OUTLINE} size={ButtonSize.SM} disabled>Click me</Button>
          </div>
        </div>
      </div>

      <hr style={{
        height: '1px', backgroundColor: '#8E8A89', marginTop: '10px', marginBottom: '15px',
      }}
      />

      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <h3 style={{ color: 'black', width: '200px' }}>Shost</h3>
        <div style={{ display: 'flex', gap: '15px' }}>
          <div>
            <Button variant={ButtonType.GHOST} size={ButtonSize.SM}>Click me</Button>
          </div>
          <div>
            <Button variant={ButtonType.GHOST} size={ButtonSize.MD}>Click me</Button>
          </div>
          <div>
            <Button variant={ButtonType.GHOST} size={ButtonSize.LG}>Click me</Button>
          </div>
          <div>
            <Button variant={ButtonType.GHOST} size={ButtonSize.SM} disabled>Click me</Button>
          </div>
        </div>
      </div>

      <hr style={{
        height: '1px', backgroundColor: '#8E8A89', marginTop: '10px', marginBottom: '15px',
      }}
      />

      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <h3 style={{ color: 'black', width: '200px' }}>Shost Inverted</h3>
        <div style={{ display: 'flex', gap: '15px' }}>
          <div>
            <Button variant={ButtonType.GHOST_INVERTED} size={ButtonSize.SM}>Click me</Button>
          </div>
          <div>
            <Button variant={ButtonType.GHOST_INVERTED} size={ButtonSize.MD}>Click me</Button>
          </div>
          <div>
            <Button variant={ButtonType.GHOST_INVERTED} size={ButtonSize.LG}>Click me</Button>
          </div>
          <div>
            <Button variant={ButtonType.GHOST_INVERTED} size={ButtonSize.SM} disabled>Click me</Button>
          </div>
        </div>
      </div>

      <hr style={{
        height: '1px', backgroundColor: '#8E8A89', marginTop: '10px', marginBottom: '15px',
      }}
      />

      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <h3 style={{ color: 'black', width: '200px' }}>Square</h3>
        <div style={{ display: 'flex', gap: '15px' }}>
          <div>
            <Button variant={ButtonType.PRIMARY} size={ButtonSize.SM} square>{'<'}</Button>
          </div>
          <div>
            <Button variant={ButtonType.PRIMARY} size={ButtonSize.MD} square>{'<'}</Button>
          </div>
          <div>
            <Button variant={ButtonType.PRIMARY} size={ButtonSize.LG} square>{'<'}</Button>
          </div>
          <div>
            <Button variant={ButtonType.PRIMARY} size={ButtonSize.SM} square disabled>{'<'}</Button>
          </div>
        </div>
      </div>
    </>
  ),
};
Dark.parameters = { theme: Theme.DARK };
