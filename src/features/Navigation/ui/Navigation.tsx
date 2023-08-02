import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/utils/classNames';
import { useSelector } from 'react-redux';
import styles from './Navigation.module.scss';
import { NavigationItem } from './NavigationItem/NavigationItem';
import { getNavigationItems } from '../model/selectors/getNavigationItem/getNavigationItem';

interface NavigationProps {
  collapsed: boolean;
}

export const Navigation = memo(({ collapsed }: NavigationProps) => {
  const navigationItems = useSelector(getNavigationItems);

  const navigationLinkJSX = useMemo(
    () => (navigationItems.map((item) => (
      <NavigationItem key={item.path} item={item} collapsed={collapsed} />))),
    [collapsed, navigationItems],
  );

  return (
    <nav className={classNames(styles.Navigation, [], {
      [styles.collapsed]: collapsed,
    })}
    >
      {navigationLinkJSX}
    </nav>
  );
});
