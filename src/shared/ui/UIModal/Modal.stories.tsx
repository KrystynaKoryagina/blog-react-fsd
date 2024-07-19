import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/lib/contexts/theme';

import { UIModal } from './UIModal';

import styles from './Modal.module.scss';

const meta: Meta<typeof UIModal> = {
  title: 'shared/Modal',
  component: UIModal,
};

export default meta;
type Story = StoryObj<typeof UIModal>;

const content =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur officiis dicta nam, maiores neque rem sit laudantium nihil quidem voluptatem expedita, eaque assumenda doloremque? Voluptate pariatur nemo et rerum beatae!';

export const Light: Story = {
  render: (args) => (
    <UIModal className={styles.modalEnterDone} {...args} isOpen>
      {content}
    </UIModal>
  ),
};

export const Dark: Story = {
  render: (args) => (
    <UIModal className={styles.modalEnterDone} {...args} isOpen>
      {content}
    </UIModal>
  ),
};
Dark.parameters = { theme: Theme.DARK };
