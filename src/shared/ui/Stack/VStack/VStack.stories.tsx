import { ComponentMeta, ComponentStory } from '@storybook/react';
import { VStack } from './VStack';

export default {
  title: 'shared/VStack',
  component: VStack,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof VStack>;

const Template: ComponentStory<typeof VStack> = (args) => (
  <VStack {...args} />
);

export const Column = Template.bind({});
Column.args = {
    children: (
        <>
            <div style={{width: '100px', height: '30px', border: '1px solid #000', textAlign: "center"}}>1</div>
            <div style={{width: '100px', height: '30px', border: '1px solid #000', textAlign: "center"}}>2</div>
            <div style={{width: '100px', height: '30px', border: '1px solid #000', textAlign: "center"}}>3</div>
            <div style={{width: '100px', height: '30px', border: '1px solid #000', textAlign: "center"}}>4</div>
        </>
    ),
};

export const ColumnGap4 = Template.bind({});
ColumnGap4.args = {
    gap: '4',
    align: 'center',
    justify: 'center',
    children: (
        <>
            <div style={{width: '100px', height: '30px', border: '1px solid #000', textAlign: "center"}}>1</div>
            <div style={{width: '100px', height: '30px', border: '1px solid #000', textAlign: "center"}}>2</div>
            <div style={{width: '100px', height: '30px', border: '1px solid #000', textAlign: "center"}}>3</div>
            <div style={{width: '100px', height: '30px', border: '1px solid #000', textAlign: "center"}}>4</div>
        </>
    ),
};

export const ColumnGap8 = Template.bind({});
ColumnGap8.args = {
    gap: '8',
    align: 'end',
    justify: 'end',
    children: (
        <>
            <div style={{width: '100px', height: '30px', border: '1px solid #000', textAlign: "center"}}>1</div>
            <div style={{width: '100px', height: '30px', border: '1px solid #000', textAlign: "center"}}>2</div>
            <div style={{width: '100px', height: '30px', border: '1px solid #000', textAlign: "center"}}>3</div>
            <div style={{width: '100px', height: '30px', border: '1px solid #000', textAlign: "center"}}>4</div>
        </>
    ),
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
    gap: '16',
    children: (
        <>
            <div style={{width: '100px', height: '30px', border: '1px solid #000', textAlign: "center"}}>1</div>
            <div style={{width: '100px', height: '30px', border: '1px solid #000', textAlign: "center"}}>2</div>
            <div style={{width: '100px', height: '30px', border: '1px solid #000', textAlign: "center"}}>3</div>
            <div style={{width: '100px', height: '30px', border: '1px solid #000', textAlign: "center"}}>4</div>
        </>
    ),
};
