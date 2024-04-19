import { ElementType, Fragment, ReactNode, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { classNames } from '@/shared/lib/utils/classNames';
import { Direction, directionClass } from '@/shared/types/direction';
import { DropdownItem } from './types/dropdown';
import styles from './UIDropdown.module.scss';
import { UIButton } from '../UIButton';

interface UIDropdownProps {
  items: DropdownItem[];
  trigger: ReactNode;
  className?: string;
  direction?: Direction;
  triggerAs?: ElementType;
}

export const UIDropdown = ({
  items,
  trigger,
  triggerAs = 'button',
  className,
  direction = 'bottom left',
}: UIDropdownProps) => {
  const menuItemsJSX = useMemo(
    () =>
      items?.map(({ disabled, onClick, content, href, id }) => {
        const contentJSX = ({ active }: { active: boolean }) => (
          <UIButton
            as={href ? Link : 'button'}
            to={href}
            type="button"
            disabled={disabled}
            onClick={onClick}
            className={classNames(styles.dropdownItem, [], {
              dropdownMenuItemActive: active,
            })}
          >
            {content}
          </UIButton>
        );

        return (
          <Menu.Item as={Fragment} key={id}>
            {contentJSX}
          </Menu.Item>
        );
      }),
    [], // TODO eslint no errors
  );

  return (
    <Menu as="div" className={classNames('dropdown', [className])}>
      <Menu.Button as={triggerAs} className="dropdownTriggerBtn">
        {trigger}
      </Menu.Button>
      <Menu.Items
        className={classNames(styles.dropdownMenu, [
          'dropdownMenuList',
          directionClass[direction],
        ])}
      >
        {menuItemsJSX}
      </Menu.Items>
    </Menu>
  );
};
