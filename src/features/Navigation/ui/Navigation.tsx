import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/utils/classNames';
import styles from './Navigation.module.scss';
import { NavigationList } from '../model/config/navigation.config';
import { NavigationItem } from './NavigationItem/NavigationItem';

interface NavigationProps {
  collapsed: boolean;
}

export const Navigation = memo(({ collapsed }: NavigationProps) => {
  const navigationLinkJSX = useMemo(() => (NavigationList.map((item) => (
    <NavigationItem key={item.path} item={item} collapsed={collapsed} />))), [collapsed]);

  return (
    <nav className={classNames(styles.Navigation, [], {
      [styles.collapsed]: collapsed,
    })}
    >
      {navigationLinkJSX}
    </nav>
  );
});
