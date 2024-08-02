import { Popover as HPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/utils/classNames';
import { Direction, directionClass } from '@/shared/types/direction';
import styles from './Popover.module.scss';

interface PopoverProps {
  trigger: ReactNode;
  className?: string;
  direction?: Direction;
  children: ReactNode;
  unmount?: boolean;
}

/**
 * @deprecated Use `UIPopover` instead.
 */
export const Popover = ({
  trigger,
  className,
  children,
  direction = 'bottom left',
  unmount = true,
}: PopoverProps) => {
  const panelClasses = directionClass[direction];

  return (
    <HPopover className={classNames(styles.Popover)}>
      <HPopover.Button as="div" className={styles.trigger}>
        {trigger}
      </HPopover.Button>

      <HPopover.Panel
        className={classNames(styles.panel, [className, panelClasses])}
        unmount={unmount}
      >
        {children}
      </HPopover.Panel>
    </HPopover>
  );
};
