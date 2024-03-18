import type { Meta, StoryObj } from '@storybook/react';

import { UIImage } from './UIImage';
import JsImg from '@/shared/assets/tests/js-storybook.png';
import { Skeleton } from '@/shared/ui/Skeleton';

const imgErrorStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#c9c9c9',
};

const meta: Meta<typeof UIImage> = {
  title: 'shared/Image',
  component: UIImage,
  decorators: [
    (Story) => (
      <div style={{ width: '256px', height: '256px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof UIImage>;

export const Light: Story = {
  args: {
    src: JsImg,
    alt: 'Alt text',
    fallback: <Skeleton width="100%" height="100%" />,
    errorFallback: <div style={imgErrorStyle}>No Image</div>,
  },
};

export const LightError: Story = {
  args: {
    alt: 'Alt text',
    fallback: <Skeleton width="100%" height="100%" />,
    errorFallback: <div style={imgErrorStyle}>No Image</div>,
  },
};
