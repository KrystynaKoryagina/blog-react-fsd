import type { Meta, StoryObj } from '@storybook/react';
// import { Theme } from '@/shared/lib/contexts/theme';
import { UIText } from './UIText';

// TODO

const meta: Meta<typeof UIText> = {
  title: 'shared/Text',
  component: UIText,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  render: () => (
    <>
      <UIText variant="primary" size="lg">
        Lorem ipsum dolor sit amet consectetur.
      </UIText>

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
            '<UIText variant={TextType.PRIMARY} size={TextSize.LG}>\n Lorem ipsum dolor sit amet consectetur.\n</UIText>'
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

      <UIText variant="primary" size="lg" align="center">
        Lorem ipsum dolor sit amet consectetur.
      </UIText>

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
            '<UIText variant={TextType.PRIMARY} size={TextSize.LG} align={TextAlign.CENTER}>\n Lorem ipsum dolor sit amet consectetur.\n</UIText>'
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

      <UIText variant="primary" size="lg" align="right">
        Lorem ipsum dolor sit amet consectetur.
      </UIText>

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
            '<UIText variant={TextType.PRIMARY} size={TextSize.LG} align={TextAlign.RIGHT}>\n Lorem ipsum dolor sit amet consectetur.\n</UIText>'
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

      <UIText variant="primary" size="md">
        Lorem ipsum dolor sit amet consectetur.
      </UIText>

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
            '<UIText variant={TextType.PRIMARY} size={TextSize.MD}>\n Lorem ipsum dolor sit amet consectetur.\n</UIText>'
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

      <UIText variant="primary" size="md" align="center">
        Lorem ipsum dolor sit amet consectetur.
      </UIText>

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
            '<UIText variant={TextType.PRIMARY} size={TextSize.MD} align={TextAlign.CENTER}>\n Lorem ipsum dolor sit amet consectetur.\n</UIText>'
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

      <UIText variant="primary" size="md" align="right">
        Lorem ipsum dolor sit amet consectetur.
      </UIText>

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
            '<Text variant={TextType.PRIMARY} size={TextSize.MD} align={TextAlign.RIGHT}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
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

      {/* <Text variant={TextType.PRIMARY} size={TextSize.SM}>
        Lorem ipsum dolor sit amet consectetur.
      </Text>

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
            '<Text variant={TextType.PRIMARY} size={TextSize.SM}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
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
      /> */}

      {/* <Text
        variant={TextType.PRIMARY}
        size={TextSize.SM}
        align={TextAlign.CENTER}
      >
        Lorem ipsum dolor sit amet consectetur.
      </Text>

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
            '<Text variant={TextType.PRIMARY} size={TextSize.SM} align={TextAlign.CENTER}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
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
      /> */}

      {/* <Text
        variant={TextType.PRIMARY}
        size={TextSize.SM}
        align={TextAlign.RIGHT}
      >
        Lorem ipsum dolor sit amet consectetur.
      </Text>

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
            '<Text variant={TextType.PRIMARY} size={TextSize.SM} align={TextAlign.RIGHT}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
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
      /> */}

      {/* <Text variant={TextType.PRIMARY} size={TextSize.XS}>
        Lorem ipsum dolor sit amet consectetur.
      </Text>

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
            '<Text variant={TextType.PRIMARY} size={TextSize.XS}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
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
      /> */}

      {/* <Text
        variant={TextType.PRIMARY}
        size={TextSize.XS}
        align={TextAlign.CENTER}
      >
        Lorem ipsum dolor sit amet consectetur.
      </Text>

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
            '<Text variant={TextType.PRIMARY} size={TextSize.XS} align={TextAlign.CENTER}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
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
      /> */}

      {/* <Text
        variant={TextType.PRIMARY}
        size={TextSize.XS}
        align={TextAlign.RIGHT}
      >
        Lorem ipsum dolor sit amet consectetur.
      </Text>

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
            '<Text variant={TextType.PRIMARY} size={TextSize.XS} align={TextAlign.RIGHT}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
          }
        </code>
      </pre> */}
    </>
  ),
};

// export const PrimaryDark: Story = {
//   render: () => (
//     <>
//       <Text variant={TextType.PRIMARY} size={TextSize.LG}>
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.PRIMARY} size={TextSize.LG}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text
//         variant={TextType.PRIMARY}
//         size={TextSize.LG}
//         align={TextAlign.CENTER}
//       >
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.PRIMARY} size={TextSize.LG} align={TextAlign.CENTER}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text
//         variant={TextType.PRIMARY}
//         size={TextSize.LG}
//         align={TextAlign.RIGHT}
//       >
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.PRIMARY} size={TextSize.LG} align={TextAlign.RIGHT}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text variant={TextType.PRIMARY} size={TextSize.MD}>
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.PRIMARY} size={TextSize.MD}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text
//         variant={TextType.PRIMARY}
//         size={TextSize.MD}
//         align={TextAlign.CENTER}
//       >
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.PRIMARY} size={TextSize.MD} align={TextAlign.CENTER}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text
//         variant={TextType.PRIMARY}
//         size={TextSize.MD}
//         align={TextAlign.RIGHT}
//       >
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.PRIMARY} size={TextSize.MD} align={TextAlign.RIGHT}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text variant={TextType.PRIMARY} size={TextSize.SM}>
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.PRIMARY} size={TextSize.SM}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text
//         variant={TextType.PRIMARY}
//         size={TextSize.SM}
//         align={TextAlign.CENTER}
//       >
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.PRIMARY} size={TextSize.SM} align={TextAlign.CENTER}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text
//         variant={TextType.PRIMARY}
//         size={TextSize.SM}
//         align={TextAlign.RIGHT}
//       >
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.PRIMARY} size={TextSize.SM} align={TextAlign.RIGHT}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text variant={TextType.PRIMARY} size={TextSize.XS}>
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.PRIMARY} size={TextSize.XS}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text
//         variant={TextType.PRIMARY}
//         size={TextSize.XS}
//         align={TextAlign.CENTER}
//       >
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.PRIMARY} size={TextSize.XS} align={TextAlign.CENTER}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text
//         variant={TextType.PRIMARY}
//         size={TextSize.XS}
//         align={TextAlign.RIGHT}
//       >
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.PRIMARY} size={TextSize.XS} align={TextAlign.RIGHT}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>
//     </>
//   ),
// };
// PrimaryDark.parameters = { theme: Theme.DARK };

// export const Secondary: Story = {
//   render: () => (
//     <>
//       <Text variant={TextType.SECONDARY} size={TextSize.LG}>
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.SECONDARY} size={TextSize.LG}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text
//         variant={TextType.SECONDARY}
//         size={TextSize.LG}
//         align={TextAlign.CENTER}
//       >
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.SECONDARY} size={TextSize.LG} align={TextAlign.CENTER}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text
//         variant={TextType.SECONDARY}
//         size={TextSize.LG}
//         align={TextAlign.RIGHT}
//       >
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.SECONDARY} size={TextSize.LG} align={TextAlign.RIGHT}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text variant={TextType.SECONDARY} size={TextSize.MD}>
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.SECONDARY} size={TextSize.MD}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text
//         variant={TextType.SECONDARY}
//         size={TextSize.MD}
//         align={TextAlign.CENTER}
//       >
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.SECONDARY} size={TextSize.MD} align={TextAlign.CENTER}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text
//         variant={TextType.SECONDARY}
//         size={TextSize.MD}
//         align={TextAlign.RIGHT}
//       >
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.SECONDARY} size={TextSize.MD} align={TextAlign.RIGHT}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text variant={TextType.SECONDARY} size={TextSize.SM}>
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.SECONDARY} size={TextSize.SM}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text
//         variant={TextType.SECONDARY}
//         size={TextSize.SM}
//         align={TextAlign.CENTER}
//       >
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.SECONDARY} size={TextSize.SM} align={TextAlign.CENTER}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text
//         variant={TextType.SECONDARY}
//         size={TextSize.SM}
//         align={TextAlign.RIGHT}
//       >
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.SECONDARY} size={TextSize.SM} align={TextAlign.RIGHT}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text variant={TextType.SECONDARY} size={TextSize.XS}>
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.SECONDARY} size={TextSize.XS}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text
//         variant={TextType.SECONDARY}
//         size={TextSize.XS}
//         align={TextAlign.CENTER}
//       >
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.SECONDARY} size={TextSize.XS} align={TextAlign.CENTER}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text
//         variant={TextType.SECONDARY}
//         size={TextSize.XS}
//         align={TextAlign.RIGHT}
//       >
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.SECONDARY} size={TextSize.XS} align={TextAlign.RIGHT}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>
//     </>
//   ),
// };

// export const SecondaryDark: Story = {
//   render: () => (
//     <>
//       <Text variant={TextType.SECONDARY} size={TextSize.LG}>
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.SECONDARY} size={TextSize.LG}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text
//         variant={TextType.SECONDARY}
//         size={TextSize.LG}
//         align={TextAlign.CENTER}
//       >
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.SECONDARY} size={TextSize.LG} align={TextAlign.CENTER}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text
//         variant={TextType.SECONDARY}
//         size={TextSize.LG}
//         align={TextAlign.RIGHT}
//       >
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.SECONDARY} size={TextSize.LG} align={TextAlign.RIGHT}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text variant={TextType.SECONDARY} size={TextSize.MD}>
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.SECONDARY} size={TextSize.MD}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text
//         variant={TextType.SECONDARY}
//         size={TextSize.MD}
//         align={TextAlign.CENTER}
//       >
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.SECONDARY} size={TextSize.MD} align={TextAlign.CENTER}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text
//         variant={TextType.SECONDARY}
//         size={TextSize.MD}
//         align={TextAlign.RIGHT}
//       >
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.SECONDARY} size={TextSize.MD} align={TextAlign.RIGHT}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text variant={TextType.SECONDARY} size={TextSize.SM}>
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.SECONDARY} size={TextSize.SM}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text
//         variant={TextType.SECONDARY}
//         size={TextSize.SM}
//         align={TextAlign.CENTER}
//       >
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.SECONDARY} size={TextSize.SM} align={TextAlign.CENTER}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text
//         variant={TextType.SECONDARY}
//         size={TextSize.SM}
//         align={TextAlign.RIGHT}
//       >
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.SECONDARY} size={TextSize.SM} align={TextAlign.RIGHT}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text variant={TextType.SECONDARY} size={TextSize.XS}>
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.SECONDARY} size={TextSize.XS}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text
//         variant={TextType.SECONDARY}
//         size={TextSize.XS}
//         align={TextAlign.CENTER}
//       >
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.SECONDARY} size={TextSize.XS} align={TextAlign.CENTER}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text
//         variant={TextType.SECONDARY}
//         size={TextSize.XS}
//         align={TextAlign.RIGHT}
//       >
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.SECONDARY} size={TextSize.XS} align={TextAlign.RIGHT}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>
//     </>
//   ),
// };
// SecondaryDark.parameters = { theme: Theme.DARK };

// export const Error: Story = {
//   render: () => (
//     <>
//       <Text variant={TextType.ERROR} size={TextSize.LG}>
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.ERROR} size={TextSize.LG}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text
//         variant={TextType.ERROR}
//         size={TextSize.LG}
//         align={TextAlign.CENTER}
//       >
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.ERROR} size={TextSize.LG} align={TextAlign.CENTER}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text variant={TextType.ERROR} size={TextSize.LG} align={TextAlign.RIGHT}>
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.ERROR} size={TextSize.LG} align={TextAlign.RIGHT}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text variant={TextType.ERROR} size={TextSize.MD}>
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.ERROR} size={TextSize.MD}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text
//         variant={TextType.ERROR}
//         size={TextSize.MD}
//         align={TextAlign.CENTER}
//       >
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.ERROR} size={TextSize.MD} align={TextAlign.CENTER}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text variant={TextType.ERROR} size={TextSize.MD} align={TextAlign.RIGHT}>
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.ERROR} size={TextSize.MD} align={TextAlign.RIGHT}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text variant={TextType.ERROR} size={TextSize.SM}>
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.ERROR} size={TextSize.SM}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text
//         variant={TextType.ERROR}
//         size={TextSize.SM}
//         align={TextAlign.CENTER}
//       >
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.ERROR} size={TextSize.SM} align={TextAlign.CENTER}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text variant={TextType.ERROR} size={TextSize.SM} align={TextAlign.RIGHT}>
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.ERROR} size={TextSize.SM} align={TextAlign.RIGHT}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text variant={TextType.ERROR} size={TextSize.XS}>
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.ERROR} size={TextSize.XS}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text
//         variant={TextType.ERROR}
//         size={TextSize.XS}
//         align={TextAlign.CENTER}
//       >
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.ERROR} size={TextSize.XS} align={TextAlign.CENTER}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text variant={TextType.ERROR} size={TextSize.XS} align={TextAlign.RIGHT}>
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.ERROR} size={TextSize.XS} align={TextAlign.RIGHT}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>
//     </>
//   ),
// };

// export const ErrorDark: Story = {
//   render: () => (
//     <>
//       <Text variant={TextType.ERROR} size={TextSize.LG}>
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.ERROR} size={TextSize.LG}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text
//         variant={TextType.ERROR}
//         size={TextSize.LG}
//         align={TextAlign.CENTER}
//       >
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.ERROR} size={TextSize.LG} align={TextAlign.CENTER}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text variant={TextType.ERROR} size={TextSize.LG} align={TextAlign.RIGHT}>
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.ERROR} size={TextSize.LG} align={TextAlign.RIGHT}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text variant={TextType.ERROR} size={TextSize.MD}>
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.ERROR} size={TextSize.MD}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text
//         variant={TextType.ERROR}
//         size={TextSize.MD}
//         align={TextAlign.CENTER}
//       >
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.ERROR} size={TextSize.MD} align={TextAlign.CENTER}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text variant={TextType.ERROR} size={TextSize.MD} align={TextAlign.RIGHT}>
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.ERROR} size={TextSize.MD} align={TextAlign.RIGHT}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text variant={TextType.ERROR} size={TextSize.SM}>
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.ERROR} size={TextSize.SM}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text
//         variant={TextType.ERROR}
//         size={TextSize.SM}
//         align={TextAlign.CENTER}
//       >
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.ERROR} size={TextSize.SM} align={TextAlign.CENTER}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text variant={TextType.ERROR} size={TextSize.SM} align={TextAlign.RIGHT}>
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.ERROR} size={TextSize.SM} align={TextAlign.RIGHT}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text variant={TextType.ERROR} size={TextSize.XS}>
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.ERROR} size={TextSize.XS}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text
//         variant={TextType.ERROR}
//         size={TextSize.XS}
//         align={TextAlign.CENTER}
//       >
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.ERROR} size={TextSize.XS} align={TextAlign.CENTER}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>

//       <hr
//         style={{
//           height: '1px',
//           backgroundColor: '#8E8A89',
//           marginTop: '10px',
//           marginBottom: '15px',
//         }}
//       />

//       <Text variant={TextType.ERROR} size={TextSize.XS} align={TextAlign.RIGHT}>
//         Lorem ipsum dolor sit amet consectetur.
//       </Text>

//       <pre>
//         <code
//           style={{
//             display: 'block',
//             padding: '10px',
//             fontSize: '12px',
//             color: '#8E8A89',
//           }}
//         >
//           {
//             '<Text variant={TextType.ERROR} size={TextSize.XS} align={TextAlign.RIGHT}>\n Lorem ipsum dolor sit amet consectetur.\n</Text>'
//           }
//         </code>
//       </pre>
//     </>
//   ),
// };
// SecondaryDark.parameters = { theme: Theme.DARK };
