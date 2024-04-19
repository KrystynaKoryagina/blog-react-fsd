import type { Meta, StoryObj } from '@storybook/react';

import { VStack } from './VStack';
import { FlexAlign, FlexGap, FlexJustify } from '../types/stack';

const meta: Meta<typeof VStack> = {
  title: 'shared/VStack',
  component: VStack,
};

export default meta;
type Story = StoryObj<typeof VStack>;

const content = (gap: FlexGap, justify: FlexJustify, align: FlexAlign) => (
  <VStack gap={gap} justify={justify} align={align}>
    <div
      style={{
        width: '100px',
        height: '30px',
        border: '1px solid #000',
        textAlign: 'center',
      }}
    >
      1
    </div>
    <div
      style={{
        width: '100px',
        height: '70px',
        border: '1px solid #000',
        textAlign: 'center',
      }}
    >
      2
    </div>
    <div
      style={{
        width: '100px',
        height: '30px',
        border: '1px solid #000',
        textAlign: 'center',
      }}
    >
      3
    </div>
    <div
      style={{
        width: '100px',
        height: '30px',
        border: '1px solid #000',
        textAlign: 'center',
      }}
    >
      4
    </div>
  </VStack>
);

export const Light: Story = {
  render: () => (
    <>
      {content('0', 'start', 'start')}

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
            '<VStack gap={"0"} justify={"start"} align={"start"}>\n some content blocks \n</VStack>'
          }
        </code>
      </pre>

      <hr
        style={{
          height: '1px',
          backgroundColor: '#041c65',
          marginTop: '10px',
          marginBottom: '10px',
        }}
      />

      {content('0', 'center', 'center')}

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
            '<VStack gap={"0"} justify={"center"} align={"center"}>\n some content blocks \n</VStack>'
          }
        </code>
      </pre>

      <hr
        style={{
          height: '1px',
          backgroundColor: '#041c65',
          marginTop: '10px',
          marginBottom: '10px',
        }}
      />

      {content('0', 'end', 'end')}

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
            '<VStack gap={"0"} justify={"end"} align={"end"}>\n some content blocks \n</VStack>'
          }
        </code>
      </pre>

      <hr
        style={{
          height: '1px',
          backgroundColor: '#041c65',
          marginTop: '10px',
          marginBottom: '10px',
        }}
      />

      {content('0', 'between', 'center')}

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
            '<VStack gap={"0"} justify={"between"} align={"center"}>\n some content blocks \n</VStack>'
          }
        </code>
      </pre>

      <hr
        style={{
          height: '1px',
          backgroundColor: '#041c65',
          marginTop: '10px',
          marginBottom: '10px',
        }}
      />

      {content('4', 'center', 'center')}

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
            '<VStack gap={"4"} justify={"center"} align={"center"}>\n some content blocks \n</VStack>'
          }
        </code>
      </pre>

      <hr
        style={{
          height: '1px',
          backgroundColor: '#041c65',
          marginTop: '10px',
          marginBottom: '10px',
        }}
      />

      {content('8', 'center', 'center')}

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
            '<VStack gap={"8"} justify={"center"} align={"center"}>\n some content blocks \n</VStack>'
          }
        </code>
      </pre>

      <hr
        style={{
          height: '1px',
          backgroundColor: '#041c65',
          marginTop: '10px',
          marginBottom: '10px',
        }}
      />

      {content('16', 'center', 'center')}

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
            '<VStack gap={"16"} justify={"center"} align={"center"}>\n some content blocks \n</VStack>'
          }
        </code>
      </pre>

      <hr
        style={{
          height: '1px',
          backgroundColor: '#041c65',
          marginTop: '10px',
          marginBottom: '10px',
        }}
      />

      {content('24', 'center', 'center')}

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
            '<VStack gap={"24"} justify={"center"} align={"center"}>\n some content blocks \n</VStack>'
          }
        </code>
      </pre>

      <hr
        style={{
          height: '1px',
          backgroundColor: '#041c65',
          marginTop: '10px',
          marginBottom: '10px',
        }}
      />

      {content('32', 'center', 'center')}

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
            '<VStack gap={"32"} justify={"center"} align={"center"}>\n some content blocks \n</VStack>'
          }
        </code>
      </pre>
    </>
  ),
};
