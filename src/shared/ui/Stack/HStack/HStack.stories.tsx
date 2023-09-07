import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HStack } from './HStack';

export default {
  title: 'shared/HStack',
  component: HStack,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof HStack>;

const Template: ComponentStory<typeof HStack> = (args) => (
  <HStack {...args} />
);

export const Row = Template.bind({});
Row.args = {
  children: (
    <>
      <div style={{
        width: '100px', height: '30px', border: '1px solid #000', textAlign: 'center',
      }}
      >
        1
      </div>
      <div style={{
        width: '100px', height: '30px', border: '1px solid #000', textAlign: 'center',
      }}
      >
        2
      </div>
      <div style={{
        width: '100px', height: '30px', border: '1px solid #000', textAlign: 'center',
      }}
      >
        3
      </div>
      <div style={{
        width: '100px', height: '30px', border: '1px solid #000', textAlign: 'center',
      }}
      >
        4
      </div>
    </>
  ),
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
  gap: '4',
  align: 'center',
  justify: 'center',
  children: (
    <>
      <div style={{
        width: '100px', height: '30px', border: '1px solid #000', textAlign: 'center',
      }}
      >
        1
      </div>
      <div style={{
        width: '100px', height: '30px', border: '1px solid #000', textAlign: 'center',
      }}
      >
        2
      </div>
      <div style={{
        width: '100px', height: '30px', border: '1px solid #000', textAlign: 'center',
      }}
      >
        3
      </div>
      <div style={{
        width: '100px', height: '30px', border: '1px solid #000', textAlign: 'center',
      }}
      >
        4
      </div>
    </>
  ),
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
  gap: '8',
  align: 'end',
  justify: 'end',
  children: (
    <>
      <div style={{
        width: '100px', height: '30px', border: '1px solid #000', textAlign: 'center',
      }}
      >
        1
      </div>
      <div style={{
        width: '100px', height: '30px', border: '1px solid #000', textAlign: 'center',
      }}
      >
        2
      </div>
      <div style={{
        width: '100px', height: '30px', border: '1px solid #000', textAlign: 'center',
      }}
      >
        3
      </div>
      <div style={{
        width: '100px', height: '30px', border: '1px solid #000', textAlign: 'center',
      }}
      >
        4
      </div>
    </>
  ),
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
  gap: '16',
  children: (
    <>
      <div style={{
        width: '100px', height: '30px', border: '1px solid #000', textAlign: 'center',
      }}
      >
        1
      </div>
      <div style={{
        width: '100px', height: '30px', border: '1px solid #000', textAlign: 'center',
      }}
      >
        2
      </div>
      <div style={{
        width: '100px', height: '30px', border: '1px solid #000', textAlign: 'center',
      }}
      >
        3
      </div>
      <div style={{
        width: '100px', height: '30px', border: '1px solid #000', textAlign: 'center',
      }}
      >
        4
      </div>
    </>
  ),
};
