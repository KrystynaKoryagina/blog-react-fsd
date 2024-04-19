import { Popover as HPopover } from '@headlessui/react';
import { ElementType, ReactNode } from 'react';
import { classNames } from '@/shared/lib/utils/classNames';
import { Direction, directionClass } from '@/shared/types/direction';
import styles from './UIPopover.module.scss';

interface UIPopoverProps {
  trigger: ReactNode;
  className?: string;
  direction?: Direction;
  children: ReactNode;
  unmount?: boolean;
  triggerAs?: ElementType;
}

export const UIPopover = ({
  trigger,
  className,
  children,
  triggerAs = 'button',
  direction = 'bottom left',
  unmount = true,
}: UIPopoverProps) => (
  <HPopover className="dropdown">
    <HPopover.Button as={triggerAs} className="dropdownTriggerBtn">
      {trigger}
    </HPopover.Button>

    <HPopover.Panel
      className={classNames('dropdownMenuList', [
        className,
        directionClass[direction],
      ])}
      unmount={unmount}
    >
      {children}
    </HPopover.Panel>
  </HPopover>
);
