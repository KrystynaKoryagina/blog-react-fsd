import { Menu } from '@headlessui/react';
import styles from './DropdownMenu.module.scss';
import { classNames } from 'shared/lib/utils/classNames';
import { Fragment, ReactNode } from 'react';
import { DropdownDirection, DropdownItem } from '../../types/dropdownMenu';
import { Link } from 'react-router-dom';

interface DropdownMenuProps {
  items: DropdownItem[]
  trigger: ReactNode
  className?: string
  direction?: DropdownDirection
}

const directionClass: Record<DropdownDirection, string> = {
  'bottom left': styles.bottomLeft,
  'bottom right': styles.bottomRight,
  'top right': styles.topRight,
  'top left': styles.topLeft,
};

export const DropdownMenu = ({ 
  items, 
  trigger, 
  className, 
  direction = 'bottom right' 
}: DropdownMenuProps) => {
  const menuItemsClasses = [directionClass[direction]];

  const menuItemsJSX = items?.map(({disabled, onClick, content, href, id}) => {
    const contentJSX = ({ active }: { active: boolean }) => (
      <button
          type="button"
          disabled={disabled}
          onClick={onClick}
          className={classNames(styles.menuItem, [], { [styles.menuItemActive]: active })}
      >
        {content}
      </button>
    );

    if (href) {
      return (
        <Menu.Item key={id} as={Link} to={href} disabled={disabled}>
          {contentJSX}
        </Menu.Item>
      );
    }

    return (
      <Menu.Item as={Fragment} key={id}>
        {contentJSX}
      </Menu.Item>
    );
  })

  return (
    <Menu as='div' className={classNames(styles.DropdownMenu, [className])}>
      <Menu.Button className={styles.btn}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={classNames(styles.menuList, menuItemsClasses)}>
        { menuItemsJSX }
      </Menu.Items>
    </Menu>
  )
}
