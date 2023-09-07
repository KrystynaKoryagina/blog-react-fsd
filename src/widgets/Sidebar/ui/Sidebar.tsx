import { LangSwitcher } from 'features/LangSwitcher';
import { Navigation } from 'features/Navigation';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/utils/classNames';
import { Button, ButtonType, ButtonSize } from 'shared/ui/Button';
import { VStack } from 'shared/ui/Stack';
import styles from './Sidebar.module.scss';

export const Sidebar = memo(() => {
  const [collapsed, setCollapsed] = useState(false);

  const onSidebarToggle = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  return (
    <aside
      data-testid='sidebar'
      className={classNames(styles.Sidebar, [], {
        [styles.collapsed]: collapsed,
      })}
    >
      <VStack className={classNames(styles.content)}>
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
        <VStack
          className={styles.switchers}
          align='center'
          gap='8'
        >
          <ThemeSwitcher />
          <LangSwitcher />
        </VStack>
      </VStack>
    </aside>
  );
});
