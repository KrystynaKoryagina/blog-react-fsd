import { ReactNode } from 'react';
import { classNames } from 'shared/lib/utils/classNames';
import { Portal } from 'shared/ui/Portal';
import { Overlay } from 'shared/ui/Overlay';
import { useCloseOnEsc } from 'shared/lib/hooks/useCloseOnEsc';
import styles from './Drawer.module.scss';

interface DrawerProps {
  isOpen: boolean
  className?: string
  children?: ReactNode
  onClose: () => void
}

export const Drawer = ({
  isOpen, onClose, children, className,
}: DrawerProps): JSX.Element => {
  useCloseOnEsc({ onClose });

  return (
    <Portal>
      <div className={classNames(styles.Drawer, [className], {
        [styles.open]: isOpen,
        [styles.close]: !isOpen,
      })}
      >
        <Overlay onClick={onClose} />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
};
