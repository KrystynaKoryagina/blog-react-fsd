import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonType } from 'shared/ui/Button';
import styles from './Sidebar.module.scss';

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onSidebarToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid='sidebar'
      className={classNames(styles.Sidebar, [], {
        [styles.collapsed]: collapsed,
      })}
    >
      <Button data-testid='sidebar-toggle' variant={ButtonType.GHOST} onClick={onSidebarToggle}>
        Toggle
      </Button>
      <ThemeSwitcher classname={styles.switcher} />
    </div>
  );
};
