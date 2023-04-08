import { LangSwitcher } from 'features/LangSwitcher';
import { Navigation } from 'features/Navigation';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { memo, useState } from 'react';
import { classNames } from 'shared/lib/utils/classNames';
import { Button, ButtonType, ButtonSize } from 'shared/ui/Button';
import styles from './Sidebar.module.scss';

export const Sidebar = memo(() => {
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
        className={styles.toggleBtn}
        variant={ButtonType.PRIMARY_INVERTED}
        size={ButtonSize.LG}
        square
        onClick={onSidebarToggle}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <ThemeSwitcher classname={styles.switcher} />
      <LangSwitcher className={styles.langs} />
    </div>
  );
});
