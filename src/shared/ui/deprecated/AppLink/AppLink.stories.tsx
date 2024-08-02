// TODO

// import { Meta, StoryObj } from '@storybook/react';
// import { Theme } from '@/shared/lib/contexts/theme';
// import { AppLink } from './AppLink';

// const meta: Meta<typeof AppLink> = {
//   title: 'shared/Link',
//   component: AppLink,
//   decorators: [(Story) => <Story />],
// };

// export default meta;

// type Story = StoryObj<typeof AppLink>;

// export const Light: Story = {
//   render: () => <AppLink to="/">Link</AppLink>,
// };

// export const Dark: Story = {
//   render: () => <AppLink to="/">Link</AppLink>,
// };
// Dark.parameters = { theme: Theme.DARK };

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppLink } from './AppLink';
import { Theme } from '@/shared/lib/contexts/theme';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
  <AppLink {...args} />
);

export const Light = Template.bind({});
Light.args = {
  children: 'Link text',
};

export const Dark = Template.bind({});

Dark.args = {
  children: 'Link text',
};
Dark.parameters = { theme: Theme.DARK };
