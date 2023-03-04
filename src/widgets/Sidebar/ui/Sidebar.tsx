import { Navigation } from 'features/Navigation';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonType, ButtonSize } from 'shared/ui/Button';
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
      <Navigation collapsed={collapsed} />
      <Button
        data-testid='sidebar-toggle'
        classname={styles.toggleBtn}
        variant={ButtonType.SECONDARY}
        size={ButtonSize.LG}
        square
        onClick={onSidebarToggle}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <ThemeSwitcher classname={styles.switcher} />
    </div>
  );
};
