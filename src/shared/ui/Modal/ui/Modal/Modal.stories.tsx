import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/lib/contexts/theme';

import { Modal } from './Modal';

import styles from './Modal.module.scss';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

const content =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur officiis dicta nam, maiores neque rem sit laudantium nihil quidem voluptatem expedita, eaque assumenda doloremque? Voluptate pariatur nemo et rerum beatae!';

export const Light: Story = {
  render: (args) => (
    <Modal className={styles.modalEnterDone} {...args} isOpen>
      {content}
    </Modal>
  ),
};

export const Dark: Story = {
  render: (args) => (
    <Modal className={styles.modalEnterDone} {...args} isOpen>
      {content}
    </Modal>
  ),
};
Dark.parameters = { theme: Theme.DARK };
