import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { NavigationItem } from '../NavigationItem/NavigationItem';
import { getNavigationItems } from '../../model/selectors/getNavigationItem/getNavigationItem';

interface NavigationProps {
  className?: string;
  collapsed: boolean;
}

export const Navigation = memo(({ collapsed, className }: NavigationProps) => {
  const navigationItems = useSelector(getNavigationItems);

  const navigationLinkJSX = useMemo(
    () =>
      navigationItems.map((item) => (
        <NavigationItem key={item.path} item={item} collapsed={collapsed} />
      )),
    [collapsed, navigationItems],
  );

  return <nav className={className}>{navigationLinkJSX}</nav>;
});
